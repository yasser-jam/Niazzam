<template>
  <base-dialog :model-value="true" @close="goBack">
    <template #title>Add Payment Amount!</template>

    <template #body>
      <div class="gird grid-cols-1">
        <div class="">
          <base-label>Name</base-label>

          <da-text-input class="mt-2 w-full" bordered :options="fields"></da-text-input>
        </div>

        <div class="">
          <base-label>Category</base-label>

          <base-select class="mt-2" :options="fields"></base-select>
        </div>

        <div class="mt-4">
          <base-label>Amount</base-label>

          <div class="flex flex-wrap gap-4 mt-2">
            <base-select-btn
              v-for="option in paymentsOptions"
              :option="option"
              :active="option.value == payment.amount"
              @click="payment.amount = option.value"
            ></base-select-btn>
          </div>
        </div>
      </div>
    </template>
  </base-dialog>
</template>

<script setup lang="ts">
const router = useRouter();

const payment = ref({
  amount: 1000,
  field: "child",
});

const paymentsOptions = ref([
  {
    title: "1000",
    value: 1000,
  },
  {
    title: "2000",
    value: 2000,
  },
  {
    title: "10000",
    value: 10000,
  },
  {
    title: "20000",
    value: 20000,
  },
  {
    title: "30000",
    value: 30000,
  },
  {
    title: "40000",
    value: 40000,
  },
  {
    title: "50000",
    value: 50000,
  },
  {
    title: "Other",
    value: 0,
  },
]);

const fields = ref([
  {
    label: "Transportation",
    value: "transport",
  },
  {
    label: "Units",
    value: "units",
  },
  {
    label: "College",
    value: "college",
  },
  {
    label: "Food",
    value: "food",
  },
  {
    label: "Others",
    value: "others",
  },
]);

const goBack = () => {
  router.push("/payment");
};
</script>
