<template>
    <div class="flex items-center py-4 px-6 rounded-2xl w-full" :class="active ? 'bg-info' : 'bg-neutral'">
        <Icon name="i-heroicons-home-modern" class="me-6" color="white" size="2rem" />
        
        <div class="flex flex-col leading-none space-y-2 text-white text-lg">
            <div class="font-semibold">Dentist</div>
            <div class="text-gray-300 text-sm">Dr.Skaff</div>
        </div>

        <div class="font-semibold text-lg text-white ms-auto">10 AM</div>
        
    </div>
</template>

<script setup lang="ts">
defineProps({
    active: {
        type: Boolean
    }
})
</script>