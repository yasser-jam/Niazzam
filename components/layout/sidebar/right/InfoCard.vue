<template>
  <div class="flex flex-col items-center justify-center">
    <div class="avatar">
      <div class="w-12 rounded-md bg-white ring-offset-base-100 ring-offset-2">
        <Icon name="i-heroicons-cake" size="md" color="#4A00FF" class="p-2" />
      </div>
    </div>
    <div class="text-gray-500 text-xs font-medium mt-2">Weight</div>
    <div class="text-white font-semibold text-lg">50 kg</div>
  </div>
</template>

<script setup lang="ts">
defineProps({
    icon: {
        type: String,
    },
    label: {
        type: String
    },
    value: {
        type: Number
    }
})

</script>