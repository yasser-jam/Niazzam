<template>
  
    <div class="container">
        
      <div class="flex items-center justify-between mb-8">
        <base-title>Goals</base-title>
        <base-btn icon="heroicons:plus-16-solid" @click="$router.push('/goals/add')">Add Goal</base-btn>
      </div>


      <!-- <div class="flex items-center justify-between mb-8">
        <base-subtitle>Weekly Goals <base-badge>week-2</base-badge></base-subtitle>
        <base-btn primary>Monthly</base-btn>
      </div> -->
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <goal-card v-for="goal in goals" :goal="goal"></goal-card>
      </div>

      <div class="mt-8">

        <div class="flex justify-between item-center mb-4">

          <div class="text-2xl font-bold mb-4">Day Tasks</div>

          <base-btn primary @click="$router.push('/goals/add-task')">Add Task</base-btn>
          
        </div>

        <goal-task v-for="task in tasks" :key="task.id" :task="task" class="mb-4"></goal-task>
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
  definePageMeta({
    layout: 'test'
  })

  const goals = ref([
    {
      id: 1,
      title: 'Reading',
      currentState: 'Stage - 4',
      description: 'Syrian Improvments',
      category: 'Learning',
      progress: 50,
      level: 1
    },
    {
      id: 2,
      title: 'Algorithms',
      currentState: 'Stage - 3',
      description: 'Testing and Practicing',
      category: 'Sport',
      progress: 70,
      level: 2
    },
    {
      id: 3,
      title: 'Memorizing',
      currentState: 'Poem 4',
      description: 'Ibn Zaidon',
      category: 'Improvements',
      progress: 20,
      level: 2
    },
    {
      id: 4,
      title: 'Documentries',
      currentState: 'Docs 5',
      description: 'Apucalips 5',
      category: 'Work',
      progress: 90,
      level: 3
    },
  ])


  const tasks = ref([
    {
      id: 1,
      name: '50 page from book',
      goal: 'Reading',
      status: true
    },
    {
      id: 2,
      name: 'Work for 6 hours',
      goal: 'Work',
      status: false
    },
    {
      id: 3,
      name: 'Attend two videos from Nest course',
      goal: 'Learning',
      status: true
    },
    {
      id: 4,
      name: 'Attend two lectures in college',
      goal: 'Improvements',
      status: false
    },
  ])
  
  </script>