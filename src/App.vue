<script setup lang="ts">
import { ref } from 'vue'
import UserList from './components/UserList.vue'

const users = ref([{ name: 'Alice' }, { name: 'Julia' }])

created() {
  // TODO fetch from file
}
</script>

<template>
  <div class="max-w-screen-lg mx-auto bg-blue-100 h-screen">
    <UserList :users="users" />
  </div>
</template>
