<template>
    <!-- <div>
        <base-chart></base-chart>
    </div> -->

    <base-subtitle class="mt-8">Tasks</base-subtitle>
    <div class="grid grid-cols-1">
        <!-- <payment-table :payments="payments"></payment-table> -->
    </div>

    <base-subtitle class="flex items-center mt-8 mb-4">
        <div>Outcomes</div>
        <div class="ms-2 text-gray-400 text-base font-normal">(last week)</div>
</base-subtitle>
    <div class="grid grid-cols-1">
        <payment-table :payments="payments"></payment-table>
    </div>

</template>

<script setup lang="ts">
const test = ref('')

const paymentStore = usePaymentStore()

const { payments } = storeToRefs(paymentStore)

const { pending } = useLazyAsyncData(() => paymentStore.list())


</script>