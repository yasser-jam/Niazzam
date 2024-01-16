<template>
  <button
    class="btn btn-primary text-white"
    :class="link && 'btn-link text-gray-400 no-underline hover:no-underline'"
  >
  <Icon name="heroicons:academic-cap" size="1.75rem"></Icon>
    <slot />
  </button>
</template>

<script setup>
defineProps({
  link: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: ''
  }
});
</script>
