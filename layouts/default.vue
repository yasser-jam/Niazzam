<template>
  <template v-if="!isMobile">
    <div class="bg-[#edf3ff] overflow-auto">
      <div class="grid grid-cols-12 overflow-auto">
        <layout-sidebar-left class="block col-span-1"></layout-sidebar-left>

        <div class="col-span-8 px-8 my-8">
          <!-- <layout-header></layout-header> -->

          <main>
            <slot />
          </main>
        </div>

        <layout-sidebar-right class="col-span-3"></layout-sidebar-right>
      </div>
    </div>
  </template>

  <template v-else>
    <div class="bg-[#edf3ff] overflow-auto relative">
      <div class="grid grid-cols-12 overflow-auto">
        <!-- <layout-sidebar-left class="block col-span-1"></layout-sidebar-left> -->

        <div class="col-span-12 px-8 my-8">
          <!-- <layout-header></layout-header> -->

          <main>
            <slot />
          </main>
        </div>

        <!-- <layout-sidebar-right class="col-span-3"></layout-sidebar-right> -->
      </div>

      <footer
        class="fixed bottom-0 left-0 w-full flex justify-center gap-x-4 py-4 px-2 bg-white shadow-2xl rounded-t-lg"
      >
        <nuxt-link v-for="link in links" :to="link.link">
          <base-btn
            :primary="link.link == $route.name"
            :link="link.link != $route.name"
            :icon="link.icon"
          ></base-btn>
        </nuxt-link>
      </footer>
    </div>
  </template>
</template>

<script setup lang="ts">
const { isMobile } = useDevice();

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
