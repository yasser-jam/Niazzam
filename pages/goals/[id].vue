<template>
  <button class="btn" onclick="my_modal_4.showModal()">open modal</button>
  <dialog id="my_modal_4" class="modal">
    <div class="modal-box w-11/12 max-w-5xl">
      <h3 class="font-bold text-lg">Add New Goal</h3>

      <!-- <div class="flex justify-center">
        <div role="tablist" class="tabs tabs-boxed tabs-lg">
          <a role="tab" class="tab">Staging</a>
          <a role="tab" class="tab tab-active">Quantity</a>
        </div>
      </div> -->

      <div class="mt-8 max-h-72 overflow-auto">
        <goal-stage-input v-for="stage of stages" class="mt-4"></goal-stage-input>
        
        <div class="flex">
          <base-btn icon="heroicons:plus-16-solid" class="max-w-12 mx-auto mt-4" @click="addStage"></base-btn>
        </div>
      </div>

      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button, it will close the modal -->
          <base-btn color="primary">Submit</base-btn>
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
const stages = ref<Object[]>([{}])

const addStage = () => {
  stages.value.push({})
}
</script>