<script setup lang="ts">
import { ref } from 'vue'
import UserListItem from './UserListItem.vue'

const users = ref([
  { avatar: '../assets/images/user-1.jpg', name: 'Alice' },
  { avatar: '../assets/images/user-2.jpg', name: 'Julia' }
])
</script>

<template>
  <div class="w-1/4 bg-white border-r border-gray-300">
    <div class="overflow-y-auto h-screen p-3 mb-9 pb-20">
      <div v-for="user in users">
        <UserListItem :avatar="user.avatar" :name="user.name" />
      </div>
    </div>
  </div>
</template>
