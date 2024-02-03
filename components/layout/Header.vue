<template>
  <div class="flex justify-between">
    <div class="flex space-x-4">
      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered w-[600px]"
      />
    </div>

    <div class="dropdown dropdown-end">
      <base-btn icon="heroicons:light-bulb" color="info"></base-btn>
      <ul
        tabindex="0"
        class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  </div>
</template>
