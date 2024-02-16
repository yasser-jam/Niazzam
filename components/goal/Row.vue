<template>
  <div class="flex py-2 px-4 rounded-md w-full" :class="levelColor">
    <div class="text-lg font-bold w-1/4">{{ goal.title }}</div>

    <div class="w-1/4">
      <div class="badge badge-warning">{{ goal.description }}</div>
    </div>

    <div class="w-1/4">
      <div class="badge badge-neutral">{{ goal.currentState }}</div>
    </div>

    <div class="flex w-1/4">
      <base-btn icon="heroicons:pencil" small class="ml-auto"></base-btn>
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
      return "bg-blue-50";
    case 2:
      return "bg-purple-50";
    case 3:
      return "bg-orange-50";
    case 4:
      return "bg-red-50";
    default:
      return "";
  }
});
</script>
