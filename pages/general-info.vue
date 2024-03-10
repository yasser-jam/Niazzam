<template>

    <base-title class="mb-8">General Info</base-title>
  
    <div class="grid grid-cols-2 gap-4">
      <div>
        <base-label>First Name</base-label>
        <input
          v-model="user.firstName"
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
    </div>

    <div>
      <base-label>Last Name</base-label>
      <input
        v-model="user.lastName"
        placeholder="pick date"
        class="input input-bordered w-full"
      />
    </div>
    
    </div>
  
  
  
  
    <div class="flex justify-end gap-x-2 mt-8">
      <base-btn primary>Save</base-btn>
      <base-btn>Close</base-btn>
    </div>
  </template>
  
  <script setup lang="ts">
  const supabase = useSupabaseClient()
  // const supabase = useSupabaseClient()

  const user = ref({
    firstName: '',
    lastName: '',
    dob: '',
    job: '',
    savings: '',
    monthlyInputs: '',
  })
  </script>
  