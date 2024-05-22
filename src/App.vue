<script setup lang="ts">
import { ref, onMounted } from 'vue'
import UserList from './components/UserList.vue'

const users = ref(null)

onMounted(() => {
  fetch('./users.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status)
      }
      return response.json()
    })
    .then((json) => {
      users.value = json
      console.log(users.value)
    })
})
</script>

<template>
  <div class="max-w-screen-lg mx-auto bg-blue-100 h-screen">
    <UserList :users="users" />
  </div>
</template>
