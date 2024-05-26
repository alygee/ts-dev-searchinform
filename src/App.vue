<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { generateFakeUsers } from './assets/sampleData'
import type { User } from './assets/sampleData'
import UserList from './components/UserList.vue'
import UserDetails from './components/UserDetails.vue'

const list = ref<Element | null>(null)
const users = ref<User[] | null>(null)
const visibleUsers = ref<User[] | null>(null)
const userDetails = ref<User | null>(null)
const page = ref<number>(0)
const VISIBLE_USERS_COUNT = 20
const TOTAL_USERS_COUNT = 1e2

onMounted(() => {
  generateFakeUsers(TOTAL_USERS_COUNT).then((data) => {
    users.value = data
    visibleUsers.value = data.slice(0, VISIBLE_USERS_COUNT)
  })
})

function goUp() {
  if (page.value === 0 || !list.value) {
    return
  }

  page.value = page.value - 1

  const prevScrollOffset = list.value.scrollHeight - list.value.scrollTop
  visibleUsers.value =
    users.value?.slice(page.value * VISIBLE_USERS_COUNT, (page.value + 2) * VISIBLE_USERS_COUNT) ||
    []
  list.value.scrollTop = list.value.scrollHeight - prevScrollOffset
}

function goDown() {
  page.value = page.value + 1

  const isLastPage = page.value === TOTAL_USERS_COUNT / VISIBLE_USERS_COUNT

  if (isLastPage) {
    return
  }

  visibleUsers.value =
    users.value?.slice(page.value * VISIBLE_USERS_COUNT, (page.value + 2) * VISIBLE_USERS_COUNT) ||
    []
}
</script>

<template>
  <header class="text-center p-12 border-b-2 mb-12">
    <p class="text-2xl font-bold">Test task for searchinform company.</p>
    <p class="text-lg font-semibold">
      Done by
      <a href="https://github.com/alygee" class="italic border-b border-black">Albert Allagulov</a>
    </p>
  </header>
  <main class="max-w-screen-lg mx-auto h-screen flex">
    <div ref="list" class="w-1/3 bg-white border-r border-gray-300">
      <UserList
        :users="visibleUsers"
        @goUp="goUp"
        @goDown="goDown"
        @setUserDetails="userDetails = $event"
      />
    </div>
    <div class="w-2/3 bg-white">
      <UserDetails :userDetails="userDetails" />
    </div>
  </main>
</template>
