<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { generateFakeUsers } from './assets/sampleData'
import UserList from './components/UserList.vue'

const users = ref(null)
const chunk = ref(0)

onMounted(() => {
  users.value = generateFakeUsers(100)
})

function getChunk() {
  return users.value?.slice(0, 20)
}
</script>

<template>
  <div class="max-w-screen-lg mx-auto bg-blue-100 h-screen">
    <UserList :users="getChunk()" />
  </div>
</template>
