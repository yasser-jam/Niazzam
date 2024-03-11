// Payments
export interface Payment {
    id: null | number
    amount: number
    title?: string
    payment_filed: PaymentField
}

export interface PaymentField {
    id: null | number
    title: string
    icon: string
    amount?: number
}