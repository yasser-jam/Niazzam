<template>
<da-card class="relative overflow-hidden" :class="`bg-${props.color}`">
  <div class="liner"></div>
  <da-card-body>
    <da-card-title is="h2" class="text-white">
      Card title!
    </da-card-title>
    <da-badge size="lg" class="mt-4">test for test</da-badge>
    <da-card-actions class="justify-end card-actions">
    </da-card-actions>
  </da-card-body>
</da-card>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  value: {
    type: Number,
  },
  color: {
    type: String,
  },
});

const colorClasses = computed(() => {
  switch (props.type) {
    case 'default':
      return 'bg-primary text-primary-content'

    case 'neutral': {
      return 'bg-succes text-neutral-content'
    }

    case 'warning': {
      return 'bg-warning text-warning-content'
    }
  }
})
</script>

<style scoped>
.liner {
  position: absolute;
  top: 0px;
  left: 0;
  height: 6px;
  width: 70%;
  background: #fefefe;
}
</style>