<template>
    <div class="card shadow-md mx-auto bg-white rounded-xl relative w-[90%]">
        <div class="card-body mx-auto">
            <div class="radial-progress text-2xl" :style="`--value:${value};`" role="progressbar">{{ value }}%</div>
            <div class="font-semibold text-2xl mt-4">Reading</div>

            <div class="mt-8 mx-auto">
                <base-btn color="primary">Details</base-btn>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { type, value } = defineProps({
    type: {
        type: String,
        default: 'primary'
    },
    value: {
        type: Number,
    }
})
</script>