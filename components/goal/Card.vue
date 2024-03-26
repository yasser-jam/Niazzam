<template>
<div class="card goal-card relative rounded-md overflow-hidden background">
  
  <div class="line" :style="`width: ${goal.progress}%`"></div>

  <div class="card-body">
    <h2 class="font-semibold text-xl text-primary drop-shadow-md">
      {{ goal.title }}
    </h2>

    <base-badge>{{ goal.category }}</base-badge>

    <da-card-actions class="justify-end card-actions">
    </da-card-actions>
  </div>
</div>
</template>

<script setup lang="ts">
const props = defineProps<{
  goal: any
}>()
</script>

<style scoped>
.line {
  position: absolute;
  top: 0px;
  left: 0;
  height: 6px;
  background: #fefefe;
  transition: all .25s
}

.line::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  background-color: #007C7C;
  height: 100%;
  width: 0;
  transition: all 0.25s
}

.goal-card {
  cursor: pointer;
  transition: all .25s
}

.goal-card:hover {
  transform: scale(1.025) skew(.25deg)
}

.goal-card:hover .line::after {
  width: 100%
}

.background {
  background-image: linear-gradient(to bottom right, #cfe6fa9b, #5885a377)  
}
</style>