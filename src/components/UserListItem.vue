<script setup lang="ts">
const props = defineProps(['user'])

function getImageUrl(src: string) {
  return new URL(src, import.meta.url).href
}
</script>

<template>
  <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
    <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
      <img :src="user.avatar" :alt="user.name" class="w-12 h-12 rounded-full" />
    </div>
    <div class="flex-1">
      <h2 class="text-lg font-semibold">{{ user.id }}</h2>
    </div>
  </div>
</template>
