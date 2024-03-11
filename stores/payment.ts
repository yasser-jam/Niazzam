import { defineStore } from 'pinia'
import type { PaymentField, Payment } from '~/types'

export const usePaymentStore = defineStore('payment', () => {

    const supabase = useSupabaseClient()

    const payment = ref<Payment>(initPayment())

    const payments = ref<Payment[]>([])
    

    const get = async (id: number) => {
        try {
            const { data } = await supabase.from('payment').select().eq('id', id)
            
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
            const { data } = await supabase.from('payment').select('*')
            
            payments.value = data as Payment[]

            return payments.value

        } catch (error) {
            console.log(error);
            throw error
        }
    }


    return {

        get,
        list,

        payment,
        payments
    }
})