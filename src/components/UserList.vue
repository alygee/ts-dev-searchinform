<script setup lang="ts">
import UserListItem from './UserListItem.vue'

const props = defineProps(['users'])
</script>

<template>
  <div class="w-1/4 bg-white border-r border-gray-300">
    <div class="overflow-y-auto h-screen p-3 mb-9 pb-20">
      <div v-for="user in users">
        <UserListItem :name="user.name" />
      </div>
    </div>
  </div>
</template>
