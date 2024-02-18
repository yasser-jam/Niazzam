<template>
  <div class="grid grid-cols-2 gap-4 gap-y-6 relative p-4 border border-primary rounded-lg">
    <base-btn class="absolute right-2 top-2" square>x</base-btn>
      <div>
        <div class="text-base font-bold">Title</div>
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
      </div>
    
      <div>
        <div class="text-base font-bold">Level</div>
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
      </div>
    
      <div>
        <div class="text-base font-bold">Start Date</div>
        <input
          type="date"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
      </div>
    
      <div>
        <div class="text-base font-bold">End Date</div>
        <input
          type="date"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
      </div>
  </div>
</template>
