<template>

<div class="grid grid-cols-2 mb-8">
  <quote-card class="col-span-2"></quote-card>

</div>

  <div class="grid grid-cols-3 gap-4 mb-4">
    <div>
      <base-chart></base-chart>
    </div>
    <div>
      <base-chart></base-chart>
    </div>
    <div>
      <base-chart></base-chart>
    </div>
  </div>

  <base-subtitle class="mt-8 mb-4">Tasks</base-subtitle>
  <div class="grid grid-cols-1">
    <todo-section></todo-section>
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
const test = ref("");

const paymentStore = usePaymentStore();

const { payments } = storeToRefs(paymentStore);

const { pending } = useLazyAsyncData(() => paymentStore.list());
</script>
