<template>
  <div class="relative w-full">
    <div class="bg-white flex flex-col items-center justify-around h-full fixed w-[7%]">
      <nuxt-link to="/">
        <Icon
          name="heroicons:academic-cap"
          color="#3F00E7"
          class="w-[50px] h-[50px]"
        />
      </nuxt-link>
      
      <div class="flex flex-col space-y-12">
        <nuxt-link v-for="link in links" :to="link.link">
          <base-btn
            :primary="link.link == $route.name"
            :link="link.link != $route.name"
            :icon="link.icon"
          ></base-btn>
        </nuxt-link>
      </div>
  
      <base-btn primary icon="heroicons:cog-6-tooth"></base-btn>
    </div>

  </div>
</template>

<script setup lang="ts">
const links = ref([
  {
    title: "Payments",
    icon: "heroicons:banknotes",
    link: "payment",
  },
  {
    title: "Calender",
    icon: "heroicons:calendar",
    link: "calender",
  },
  {
    title: "Statistics",
    icon: "heroicons:chart-bar",
    link: "statistics",
  },
  {
    title: "Goals",
    icon: "heroicons:fire",
    link: "goals",
  },
]);
</script>
