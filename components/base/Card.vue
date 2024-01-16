<template>
  <div class="card card-compact w-96 bg-base-100 shadow-xl">
    <figure>
      <img
        :src="img"
        alt=""
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
      <p>{{ brief }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Show</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
    },
    brief: {
        type: String
    }

})
</script>
