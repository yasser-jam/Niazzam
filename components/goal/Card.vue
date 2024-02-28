<template>
  <da-card class="bg-slate-50" :class="`text-${color}`">
    <da-card-body class="flex flex-col items-center justify-center">
      <div
        class="radial-progress text-2xl"
        :style="`--value:${value};`"
        role="progressbar"
      >
        {{ value }}%
      </div>

      <da-card-title class="text-2xl mt-2">Reading</da-card-title>

      <base-badge>Evolution of syrian republic</base-badge>

      <da-card-actions class="mt-8">
        <base-btn primary icon="mdi-information"></base-btn>
      </da-card-actions>
    </da-card-body>
  </da-card>
  <!-- <div class="card-body mx-auto">
            <div class="radial-progress text-2xl" :style="`--value:${value};`" role="progressbar">{{ value }}%</div>
            <div class="font-semibold text-2xl mt-4">Reading</div>
    
            <div class="mt-8 mx-auto">
            </div>
        </div> -->

  <!-- <div class="card shadow-md  bg-white rounded-xl relative w-full">
    </div> -->
</template>

<script setup lang="ts">
const { type, value } = defineProps({
  type: {
    type: String,
    default: "primary",
  },
  value: {
    type: Number,
  },
  color: {
    type: String,
  },
});
</script>
