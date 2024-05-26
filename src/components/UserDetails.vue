<script setup lang="ts">
import type { User } from '../assets/sampleData'

defineProps<{ userDetails: User | null }>()
</script>

<template>
  <div
    v-if="!userDetails"
    class="flex items-center justify-center h-screen w-full font-bold text-xl"
  >
    Select user
  </div>
  <div v-else class="p-12">
    <h2 class="text-2xl font-bold text-center mb-10">{{ userDetails.name }}</h2>
    <div class="flex items-center rounded-md">
      <div class="w-32 h-32 bg-gray-300 rounded-full mr-12 relative">
        <img :src="userDetails.avatar" :alt="userDetails.name" class="w-32 h-32 rounded-full" />
        <span class="absolute bottom-2 left-2 flex h-5 w-5">
          <span
            v-if="userDetails.isActive"
            class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            :class="{ 'bg-green-400': userDetails.isActive }"
          />
          <span
            class="relative inline-flex rounded-full h-5 w-5"
            :class="{ 'bg-green-500': userDetails.isActive, 'bg-red-500': !userDetails.isActive }"
          />
        </span>
      </div>
      <div class="flex-1">
        <p>
          <span class="text-lg font-semibold mr-3">Должность:</span>
          <span class="text-lg font-normal">{{ userDetails.jobTitle }}</span>
        </p>
        <p>
          <span class="text-lg font-semibold mr-3">Отдел:</span>
          <span class="text-lg font-normal">{{ userDetails.jobArea }}</span>
        </p>
        <p>
          <span class="text-lg font-semibold mr-3">Компания:</span>
          <span class="text-lg font-normal">{{ userDetails.company }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
