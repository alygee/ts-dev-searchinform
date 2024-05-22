<script setup lang="ts">
import UserListItem from './UserListItem.vue'
import UserListItemSkeleton from './UserListItemSkeleton.vue'

const props = defineProps(['users'])
console.log('users: ', props.users)
</script>

<template>
  <div class="w-1/4 bg-white border-r border-gray-300">
    <div v-if="users" class="overflow-y-auto h-screen p-3 mb-9 pb-20">
      <div v-for="user in users" :key="user.id">
        <UserListItem :user="user" />
      </div>
    </div>
    <div v-else class="overflow-y-auto h-screen p-3 mb-9 pb-20">
      <UserListItemSkeleton v-for="index in 3" :key="index" />
    </div>
  </div>
</template>
