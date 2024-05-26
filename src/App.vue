<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { generateFakeUsers } from './assets/sampleData'
import UserList from './components/UserList.vue'

const users = ref(null)
const visibleUsers = ref(null)

onMounted(() => {
  generateFakeUsers(1e5).then((data) => {
    users.value = data
    visibleUsers.value = data.slice(0, 20)
  })
})

function goUp() {
  console.log('piu')
}
</script>

<template>
  <div class="max-w-screen-lg mx-auto bg-blue-100 h-screen">
    <UserList :users="visibleUsers" @goUp="goUp" />
  </div>
</template>
