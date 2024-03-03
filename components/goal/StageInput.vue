<template>
  <div
    class="grid grid-cols-2 gap-4 gap-y-6 relative p-4 border border-primary rounded-lg bg-white"
  >
    <div>
      <div class="text-base font-bold">Title</div>
      <input
        v-model="stage.title"
        type="text"
        placeholder="Type here"
        class="input input-bordered w-full"
      />
    </div>

    <div>
      <div class="text-base font-bold">Level</div>
      <input
        v-model="stage.level"
        type="number"
        placeholder="Type here"
        class="input input-bordered w-full"
      />
    </div>

    <div>
      <div class="text-base font-bold">Start Date</div>
      <input
        v-model="stage.startDate"
        type="date"
        placeholder="Type here"
        class="input input-bordered w-full"
      />
    </div>

    <div>
      <div class="text-base font-bold">End Date</div>
      <input
        v-model="stage.endDate"
        type="date"
        placeholder="Type here"
        class="input input-bordered w-full"
      />
    </div>

    <base-btn
    v-if="!unremovable"
      link
      icon="heroicons-x-mark-16-solid"
      class="absolute -right-6 -top-6 rounded-full bg-error text-white w-12 px-0"
      @click="$emit('close', stage)"
    ></base-btn>
  </div>
</template>

<script setup lang="ts">
const { stage } = defineProps<{
  stage: any,
  unremovable: boolean
}>()
</script>
