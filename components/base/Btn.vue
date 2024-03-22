<template>
  <button class="btn btn-outline btn-primary glass">
    <Icon v-if="icon" class="text-2xl" :name="icon" />
    <slot></slot>
  </button>

  <!-- <da-button active>
    <Icon v-if="icon" class="text-2xl" :name="icon" />
    <slot />
  </da-button> -->
</template>

<script setup>
defineProps({
  link: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
  active: {
    type: Boolean,
  },
  color: {
    type: String,
    default: "primary",
  },
  small: {
    type: Boolean,
  },
});
</script>
