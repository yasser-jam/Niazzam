<template>
  <div class="min-h-screen bg-[#F6FAFF]">
    <div class="grid grid-cols-12">

      <layout-sidebar-left class="col-span-1"></layout-sidebar-left>

      <div class="col-span-8 px-8 my-8">
        
        <layout-header></layout-header>

        <main>
          <slot />
        </main>

      </div>
      

      <layout-sidebar-right class="col-span-3"></layout-sidebar-right>
    </div>
  </div>
</template>
