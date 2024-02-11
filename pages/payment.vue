<template>
  
  <div class="container">
      
    <base-title class="mb-12 mt-8">Payments</base-title>
    
    <div class="grid grid-cols-2 gap-x-8">
      <payment-total></payment-total>
      <payment-total></payment-total>
    </div>

    <div class="grid grid-cols-3 gap-x-8 mt-8">
      <payment-card class="text-primary" :value="50"></payment-card>
      <payment-card class="text-warning" :value="25"></payment-card>
      <payment-card class="text-error" :value="95"></payment-card>
    </div>

    <div class="grid mt-8">
        <payment-table></payment-table>
    </div>
  </div>


</template>
