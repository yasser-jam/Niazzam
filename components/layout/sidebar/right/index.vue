<template>
    <div
      class="bg-primary flex flex-col justify-around items-center px-8 py-6"
    >
      <div
        class="flex flex-col justify-center items-center rounded-2xl border p-12"
      >
        <div
          class="border flex items-center justify-center w-[150px] p-1 rounded-md mb-4 relative"
        >
          <img src="~/assets/images/personal-avatar.jpg" alt="personal-avatar" />
  
          <div
            class="w-6 h-6 absolute top-2 right-2 rounded-full bg-green-500"
          ></div>
        </div>
  
        <div class="text-center">
          <div class="text-white font-semibold">Yasser Jamal Al-Deen</div>
          <div class="text-gray-500 font-medium">20 years old</div>
        </div>
  
        <div class="flex space-x-8">
          <!-- <layout-sidebar-right-info-card></layout-sidebar-right-info-card>
  
          <layout-sidebar-right-info-card></layout-sidebar-right-info-card>
  
          <layout-sidebar-right-info-card></layout-sidebar-right-info-card> -->
        </div>
      </div>
  
      <div class="border rounded-3xl bg-white w-[200px] h-[200px] my-12"></div>
  
      <div class="w-full flex flex-col space-y-4">
        <layout-sidebar-right-appointment-card
          active
        ></layout-sidebar-right-appointment-card>
        <layout-sidebar-right-appointment-card></layout-sidebar-right-appointment-card>
        <layout-sidebar-right-appointment-card></layout-sidebar-right-appointment-card>
      </div>
    </div>
</template>
