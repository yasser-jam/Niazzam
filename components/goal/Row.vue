<template>
  <div class="flex items-center py-2 px-4 rounded-md w-full bg--300" :class="levelColor">
    <div class="text-lg font-bold text-white w-1/4">{{ goal.title }}</div>

    <div class="w-1/4">
      <div class="badge badge-white badge-lg text-sm">{{ goal.description }}</div>
    </div>

    <div class="w-1/4">
      <div class="badge badge-white badge-lg text-sm">{{ goal.currentState }}</div>
    </div>

    <div class="flex w-1/4">
      <base-btn icon="heroicons:information-circle-20-solid"  link  class="ml-auto text-white"></base-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
const { goal } = defineProps<{
  goal: any;
}>();

const levelColor = computed(() => {
  switch (goal.level) {
    case 1:
      return "bg-[#74A9F0]";
    case 2:
      return "bg-[#F9B914]";
    case 3:
      return "bg-[#DD626A]";
    default:
      return "";
  }
});
</script>
