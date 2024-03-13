<template>
  
  <div class="container">
      
    <base-title class="mb-12 mt-8">Payments</base-title>
    
    <div class="grid grid-cols-2 gap-x-8">
      <payment-total></payment-total>
      <payment-total></payment-total>
    </div>

    <div class="flex justify-between items-center mt-8">
      <base-subtitle>Outcomes</base-subtitle>
      <base-btn icon="heroicons:plus" primary @click="$router.push('/payment/add-field')">Add</base-btn>
    </div>
    <div class="grid grid-cols-3 gap-x-8 mt-8">
      <payment-card v-for="field in fields" :field="field" class="text-primary" :value="50"></payment-card>
    </div>


    <div class="flex justify-between items-center mt-8">
      <base-subtitle>Regular</base-subtitle>
      <base-btn icon="heroicons:plus" primary @click="$router.push('/payment/add-amount')">Add</base-btn>
    </div>
    <div class="grid mt-8">
        <payment-table :payments="payments"></payment-table>
    </div>
  </div>


  <nuxt-page></nuxt-page>

</template>

<script setup lang="ts">

const paymentStore = usePaymentStore()
const paymentFieldStore = usePaymentFieldStore()

const { payments } = storeToRefs(paymentStore)
const { fields } = storeToRefs(paymentFieldStore)


const { pending } = useLazyAsyncData(() => paymentStore.list())
const { pending: fieldsLoading } = useLazyAsyncData(() => paymentFieldStore.list())

</script>