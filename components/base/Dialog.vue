<template>
  <!-- Open the modal using ID.showModal() method -->
  <button ref="trigger" class="btn" onclick="modal.showModal()">
    open modal
  </button>
  <dialog id="modal" class="modal overflow-hidden">
    <div class="modal-box">
      
      <h3 class="font-bold text-xl pb-2">
        <slot name="title" />
      </h3>

      <div class="py-4 overflow-auto">
        <slot name="body" />
      </div>

      <div class="modal-action justify-end pt-2">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <div class="flex gap-x-2">
            <base-btn @click="$emit('close')">Close</base-btn>
            <base-btn primary @click="$emit('save')">Save</base-btn>
          </div>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
// open dialog by default
const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    closeTitle: string;
  }>(),
  {
    closeTitle: "Close",
  }
);

// const modal = ref<HTMLElement>(null)

const trigger = ref<HTMLElement | null>(null);

onMounted(() => {
  props.modelValue && trigger.value?.click();
});
</script>
