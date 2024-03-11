import type { PaymentField } from './../types/index';
import { defineStore } from 'pinia';

import { usePaymentStore } from './payment'

export const usePaymentFieldStore = defineStore('payment_field', () => {
    
    const supabase = useSupabaseClient()

    const paymentStore = usePaymentStore()

    const { payments } = storeToRefs(paymentStore)

    const field = ref<PaymentField>(initPaymentField())
    
    const fields = ref<PaymentField[]>([])

    const reset = () => field.value = initPaymentField()

    const get = async (id: number) => {
        try {
            const { data } = await supabase.from('payment_field').select().eq('id', id)
            
            // @ts-ignore
            field.value = data

            return field.value

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    const list = async () => {
        try {
            const { data } = await supabase.from('payment_field').select('*')
            
            fields.value = data as PaymentField[]

            return fields.value

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    const getAmount = async (id: number) => {
        let amount = 0
        payments.value.forEach((el: any) => {
            if (el.field.id == id) {
                amount += el.amount
            }
        })
        console.log(amount);
        field.value.amount
    }

    const fieldData = computed(() => ({
        ...field.value,
        id: field.value.id || undefined,
    }))

    const create = async () => {
        try {
            // @ts-ignore
            await supabase.from('payment_field').insert(fieldData.value)

            // relist
            await list()
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    const update = async (id: number) => {
        try {
            // @ts-ignore
            await supabase.from('payment_field').update(field.value).eq('id', id)

            // relist
            await list()
        } catch (error) {
            console.log(error);
            throw error
        }
    }
    
    return {
        field,
        fields,

        reset,
        get,
        list,
        create,
        update,
        getAmount
    }
})