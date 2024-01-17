<template>
  <div class="min-h-screen bg-[#F6FAFF]">
    <div class="grid grid-cols-12">
      <div
        class="col-span-1 bg-white flex flex-col items-center justify-around h-screen"
      >
        <Icon
          name="heroicons:academic-cap"
          color="#3F00E7"
          class="w-[50px] h-[50px]"
        />

        <div class="flex flex-col space-y-12">
          <base-btn icon=""></base-btn>
          <base-btn></base-btn>
          <base-btn></base-btn>
          <base-btn></base-btn>
        </div>

        <base-btn class=""></base-btn>
      </div>

      <div class="flex justify-between col-span-8 px-8 my-8">
        <div class="flex space-x-4">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-[600px]"
          />
          <base-btn icon="i-heroicons-belight-bulb"></base-btn>
        </div>

        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-primary text-white">This Week</div>
          <ul
            tabindex="0"
            class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
      </div>

      <layout-sidebar-right></layout-sidebar-right>
    </div>
  </div>
</template>
