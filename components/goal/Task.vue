<template>
  <label class="flex items-center justify-between cursor-pointer bg-slate-100 rounded-md px-4 py-2">

    <div class="label-text text-lg text-primary font-bold">{{ task.name }}</div>
    
    <base-badge>{{ task.goal }}</base-badge>

    <input
      v-model="task.status"
      type="checkbox"
      :aria-label="task.status ? 'Done!' : 'Doning'"
      class="btn btn-md"
    />
  </label>
</template>

<script setup lang="ts">
const emit = defineEmits(["update:model-value"]);

const props = defineProps<{
  task: any;
}>();

</script>
