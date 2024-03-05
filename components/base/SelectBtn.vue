<template>
    <base-btn square :primary="active" class="btn-md w-24">
        <div class="flex items-center text-lg">
            <Icon name="heroicons:currency-dollar-solid" />
            <div class="ms-2">{{ option.title }}</div>
        </div>
    </base-btn>
</template>

<script setup lang="ts">

const props = defineProps<{
    active?: boolean
    option: any
}>()
</script>