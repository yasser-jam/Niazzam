import { defineStore } from 'pinia'
import type { PaymentField, Payment } from '~/types'

export const usePaymentStore = defineStore('payment', () => {

    const supabase = useSupabaseClient()

    const payment = ref<Payment>(initPayment())

    const payments = ref<Payment[]>([])
    

    const get = async (id: number) => {
        try {
            const { data } = await supabase.from('payment_amount').select().eq('id', id)
            
            // @ts-ignore
            payment.value = data

            return payment.value

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    const list = async () => {
        try {
            const { data } = await supabase.from('payment_amount').select('*, payment_field(*)')
            
            payments.value = data as Payment[]

            return payments.value

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    const paymentData = computed(() => ({
        id: payment.value.id || undefined,
        title: payment.value.title,
        amount: payment.value.amount,
        field_id: payment.value.payment_filed.id,
    }))

    const create = async () => {
        try {
            // @ts-ignore
            const { data } = await supabase.from('payment_amount').insert(paymentData.value)
            
            // relist
            await list()

        } catch (error) {
            console.log(error);
            throw error
        }
    }


    return {

        get,
        list,
        create,

        payment,
        payments
    }
})