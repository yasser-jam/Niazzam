<template>
  <da-label class="cursor-pointer bg-white rounded-md px-4 py-4">
    <da-label-text class="text-lg font-bold">{{ props.task.name }}</da-label-text>
    <!-- <da-checkbox primary size="2rem" class="text-3xl w-8" v-model="isChecked" lg/> -->
    <input v-model="formattedValue" type="checkbox" :aria-label="props.task.status ? 'Done!' : 'Doning'" class="btn " />
  </da-label>
</template>

<script setup lang="ts">
const isChecked = ref(false);

const props = defineProps<{
    task: any
}>()

const formattedValue = computed({
    get: () => props.task.status,
    set: val => emit('update:moddel-value', val)
})
</script>
