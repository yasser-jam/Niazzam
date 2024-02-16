<template>
  <button
    class="btn"
    :class="`${(link && !active) ? 'btn-link' : `bg-${color} text-white`} ${small ? 'btn-sm btn-square' :''}`"
  >
  <Icon v-if="icon" :name="icon" :size="`${small ? '1.25rem' : '1.75rem'}`"></Icon>
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
  },
  small: {
    type: Boolean
  }
});
</script>
