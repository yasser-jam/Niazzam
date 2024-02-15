<template>
  
    <div class="container">
        
      <base-title class="mb-12 mt-8">Goals</base-title>
      
      <div class="grid grid-cols-4 gap-x-8">
        <goal-card class="text-primary" :value="50"></goal-card>
        <goal-card class="text-warning" :value="25"></goal-card>
        <goal-card class="text-error" :value="75"></goal-card>
        <goal-card class="text-info" :value="20"></goal-card>
      </div>

      <div class="mt-8 w-full">
        <goal-timeline></goal-timeline>
      </div>
  
      <div class="grid mt-8">
          <!-- <payment-table></payment-table> -->
      </div>
    </div>
  
  
  </template>
  
  <script setup lang="ts">
    
  </script>