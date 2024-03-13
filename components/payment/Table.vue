<template>
  <base-table :cols="cols" :rows="payments">
    <template #title="{ item }">
      <div class="flex items-center gap-3">
        <div class="avatar bg-primary p-2 rounded-full">
          <Icon
            name="heroicons:academic-cap"
            class="text-white"
            size="1.75rem"
          ></Icon>
        </div>
        <div>
          <div class="font-bold">{{ item.payment_field.title }}</div>
        </div>
      </div>
    </template>

    <template #category="{ item }">
      <div
        class="badge badge-warning p-4 text-base rounded-lg"
      >
        {{ item.payment_field.title }}
      </div>
    </template>

    <template #date="{ item }">
      <div class="badge badge-primary text-white p-4 text-base rounded-lg">
        {{ item.created_at }}
      </div>
    </template>

    <template #amount="{ item }">
      <div class="text-primary text-2xl font-bold rounded-lg">
        ${{ item.amount }}
      </div>
    </template>
  </base-table>
</template>

<script setup lang="ts">
import type { Payment } from "~/types";

defineProps<{ payments: Payment[] }>();

const cols = [
  {
    key: "title",
    title: "Title",
  },
  {
    key: "date",
    title: "Date",
  },
  {
    key: "category",
    title: "Category",
  },
  {
    key: "amount",
    title: "Amount",
  },
];
</script>
