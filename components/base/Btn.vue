<template>
  <da-button>
    <Icon v-if="icon" class="text-2xl" :name="icon" />
  </da-button>
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
