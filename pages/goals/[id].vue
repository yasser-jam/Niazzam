<template>
  <div class="text-2xl font-bold">Stages!</div>

  <goal-stage-input
    v-for="(stage, index) of stages"
    class="mt-4"
    :stage="stage"
    @close="removeStage"
    :unremovable="index == 0"
  ></goal-stage-input>

  <base-btn
    primary
    icon="heroicons:plus"
    class="block w-fit mx-auto mt-4"
    @click="addStage"
  ></base-btn>

  <div class="flex flex-end gap-x-2">
    <base-btn primary>Save</base-btn>
    <base-btn>Close</base-btn>
  </div>
</template>

<script setup lang="ts">
const stages = ref<any[]>([
  {
    id: 1,
    title: "",
    startDate: "",
    endDate: "",
  },
]);

const addStage = () => {
  stages.value.push({
    id: new Date().getTime(),
    title: "",
    startDate: "",
    endDate: "",
  });
  console.log(stages.value);
};

const removeStage = (st: any) => {
  stages.value = stages.value.filter((el: any) => el.id != st.id);
};
</script>
