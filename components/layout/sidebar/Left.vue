<template>
  <div
    class="bg-white flex flex-col items-center justify-around h-screen"
  >
    <Icon
      name="heroicons:academic-cap"
      color="#3F00E7"
      class="w-[50px] h-[50px]"
    />

    <div class="flex flex-col space-y-12">
      <nuxt-link v-for="link in links" :to="link.link">
        <base-btn :icon="link.icon" :active="link.link == $route.name" link></base-btn>
      </nuxt-link>
    </div>

    <base-btn icon="heroicons:cog-6-tooth"></base-btn>
  </div>
</template>

<script setup lang="ts">

const links = ref([
  {
    title: 'Payments',
    icon: 'heroicons:banknotes',
    link: 'payment'
  },
  {
    title: 'Calender',
    icon: 'heroicons:calendar',
    link: 'calender'
  },
  {
    title: 'Statistics',
    icon: 'heroicons:chart-bar',
    link: 'statistics'
  },
  {
    title: 'Goals',
    icon: 'heroicons:fire',
    link: 'goals'
  },
])
</script>