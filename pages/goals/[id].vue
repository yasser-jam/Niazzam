<template>

  <base-title class="mb-8">Add new Goal</base-title>

  <div class="grid grid-cols-2 gap-4">
    <div class="col-span-2">
      <base-label>Title</base-label>
      <input
        v-model="goal.title"
        type="text"
        placeholder="Type here"
        class="input input-bordered w-full"
      />
    </div>

    <div>
      <base-label>Start</base-label>
      <input
        v-model="goal.start"
        type="date"
        placeholder="pick date"
        class="input input-bordered w-full"
      />
    </div>

    <div>
      <base-label>End</base-label>
      <input
        v-model="goal.end"
        type="date"
        placeholder="pick date"
        class="input input-bordered w-full"
      />
    </div>

    <div class="col-span-2">
      <base-label>Stages!</base-label>
      
      <goal-stage-input
        v-for="(stage, index) of goal.stages"
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
    </div>
  </div>




  <div class="flex justify-end gap-x-2 mt-8">
    <base-btn primary>Save</base-btn>
    <base-btn>Close</base-btn>
  </div>
</template>

<script setup lang="ts">

const goal = ref({
  title: '',
  start: '',
  end: '',
  stages: [
  {
    id: 1,
    title: "",
    startDate: "",
    endDate: "",
  },
]
})

const addStage = () => {
  goal.value.stages.push({
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
