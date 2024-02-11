<template>
    <div class="card shadow-md bg-white rounded-xl relative">
        <div class="card-body">

            <div class="flex items-center gap-x-6">

                <div class="radial-progress text-xl" :style="`--value:${value};`" role="progressbar">{{ value }}%</div>


                <div class="flex flex-col items-center">

                    <div class="text-xl font-bold mb-2">Units</div>

                    <div class="text-4xl font-semibold mb-2">$110.000</div>

                    <div class="text-gray-400 text-sm font-semibold">Money on Units</div>
                </div>

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

const colorClass = computed(() => `text-${type}`)
</script>

<style scoped>
.c-avatar {
    position: absolute;
    right: -.5rem;
    top: -.5rem
}
</style>