<template>
    <div class="card shadow-md bg-white rounded-xl relative">
        <div class="card-body">

            <div class="flex items-center gap-x-6 text-primary">

                <div class="radial-progress text-xl" :style="`--value:${value};`" role="progressbar">{{ value }}%</div>


                <div class="flex flex-col items-center">

                    <div class="text-xl font-bold mb-2">{{ field.title }}</div>

                    <div class="text-4xl font-semibold mb-2">${{ field.amount }}</div>

                    <div class="text-gray-400 text-sm font-semibold">Money on {{ field.title }}</div>
                </div>

            </div>

        </div>
    </div>
</template>


<script setup lang="ts">
import type { PaymentField } from '~/types';

const props = withDefaults(defineProps<{
    type: string
    value: number
    field: PaymentField
}>(), {
    type: 'primary'
})

const colorClass = computed(() => `text-${props.type}`)
</script>

<style scoped>
.c-avatar {
    position: absolute;
    right: -.5rem;
    top: -.5rem
}
</style>