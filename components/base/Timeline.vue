<template>
    <ul class="timeline">
      <li v-for="(step, index) in props.steps">
        <hr v-if="!(index == 0 && props.steps.length)" class="bg-primary" />

        <div class="timeline-box" :class="index % 2 != 0 ? 'timeline-start' : 'timeline-end'">{{ step.title }}</div>
        <div class="timeline-middle">
          <Icon name="heroicons:check-badge-solid" class="w-8 h-8 text-primary" />
        </div>
        <hr class="bg-primary" />
      </li>
    </ul>
  </template>
  
  <script setup lang="ts">
  const props = defineProps<{
    steps: any[]
  }>()
  </script>