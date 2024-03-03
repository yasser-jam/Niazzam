<template>
  
    <div class="container">
        
      <div class="flex items-center justify-between mb-8">
        <base-title>Goals</base-title>
        <base-btn icon="heroicons:plus-16-solid" @click="$router.push('/goals/add')">Add Goal</base-btn>
      </div>
      
      <div class="grid grid-cols-4 gap-8">
        <goal-card color="primary"  :value="50"></goal-card>
        <goal-card color="info" :value="25"></goal-card>
        <goal-card color="warning" :value="75"></goal-card>
        <goal-card class="bg-error" type="" :value="15"></goal-card>
      </div>

      <!-- <div class="flex flex-col gap-4 mt-8 w-full">
        <goal-row v-for="goal in goals" :goal="goal"></goal-row>
      </div> -->
  
      <div class="grid mt-8">
          <!-- <payment-table></payment-table> -->
      </div>
    </div>

    <nuxt-page></nuxt-page>
  
  </template>
  
  <script setup lang="ts">
  const goals = ref([
    {
      id: 1,
      title: 'Reading',
      currentState: 'Stage - 4',
      description: 'Syrian Improvments',
      level: 1
    },
    {
      id: 2,
      title: 'Algorithms Course',
      currentState: 'Stage - 3',
      description: 'Testing and Practicing',
      level: 2
    },
    {
      id: 3,
      title: 'Memorizing',
      currentState: 'Poem 4',
      description: 'Ibn Zaidon',
      level: 2
    },
    {
      id: 4,
      title: 'Documentries',
      currentState: 'Docs 5',
      description: 'Apucalips 5',
      level: 3
    },
    {
      id: 5,
      title: 'Study',
      currentState: 'term 2',
      description: 'term 2',
      level: 3
    },
  ])

  
  </script>