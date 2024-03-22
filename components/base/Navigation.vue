<template>
  <div class="flex flex-col gap-4">
    <nuxt-link
      v-for="(link, index) in links"
      :to="link.link"
      class="link relative decoration-transparent flex items-center gap-1 text-[#5981A6] text-lg font-semibold py-3 px-8 rounded-lg"
      :class="index == 0 && 'active'"
      active-class="bg-primary text-neutral"
    >
      <Icon name="heroicons:link-20-solid" />
      <div>{{ link.title }}</div>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const links = ref([
  {
    title: "Reading",
    icon: "",
    link: "/test",
  },
  {
    title: "Payments",
    icon: "",
    link: "/payment",
  },
  {
    title: "Work",
    icon: "",
    link: "/work",
  },
  {
    title: "Goals",
    icon: "",
    link: "/goals",
  },
]);
</script>

<style scoped lang="scss">
// .link.active {
//   @apply bg-[#d5ebf7bf];
// }

.link {
  z-index: 20;
}

.link:hover {
  color: #cfe6fa
}

.link:hover::after {
  width: 100%;
}

.link::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: #5885A3;
  border-radius: .5rem;
  z-index: -1;
  transition: all .25s

}
</style>
