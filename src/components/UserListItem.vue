<script setup>
const props = defineProps(['name'])

function getRandomImageUrl(name) {
  const num = Math.floor(Math.random() * 3)
  return new URL(`../assets/images/user-${num}.jpg`, import.meta.url).href
}
</script>

<template>
  <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
    <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
      <img :src="getRandomImageUrl()" :alt="name" class="w-12 h-12 rounded-full" />
    </div>
    <div class="flex-1">
      <h2 class="text-lg font-semibold">{{ name }}</h2>
    </div>
  </div>
</template>
