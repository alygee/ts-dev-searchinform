<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { generateFakeUsers } from './assets/sampleData'
import UserList from './components/UserList.vue'

const users = ref(null)

onMounted(async () => {
  users.value = generateFakeUsers(10)
})
</script>

<template>
  <div class="max-w-screen-lg mx-auto bg-blue-100 h-screen">
    <UserList :users="users" />
  </div>
</template>
