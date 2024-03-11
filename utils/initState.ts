import type { Payment, PaymentField } from '~/types/index'

export const initPaymentField = () : PaymentField => ({
    id: null,
    title: '',
    icon: ''
})

export const initPayment = () : Payment => ({
    id: null,
    title: '',
    amount: 0,
    payment_filed: initPaymentField()
})