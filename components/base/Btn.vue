<template>
  <button
    class="btn "
    :class="`${(link && !active) ? 'btn-link' : `bg-${color} text-white`}`"
  >
  <Icon v-if="icon" :name="icon" size="1.75rem"></Icon>
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
  },
  active: {
    type: Boolean
  },
  color: {
    type: String,
    default: 'primary'
  }
});
</script>
