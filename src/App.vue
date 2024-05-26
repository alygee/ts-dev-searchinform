<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { generateFakeUsers } from './assets/sampleData'
import UserList from './components/UserList.vue'
import UserDetails from './components/UserDetails.vue'

const list = ref(null)
const users = ref(null)
const visibleUsers = ref(null)
const userDetails = ref(null)
const page = ref(0)
const VISIBLE_USERS_COUNT = 20
const TOTAL_USERS_COUNT = 1e2

onMounted(() => {
  generateFakeUsers(TOTAL_USERS_COUNT).then((data) => {
    users.value = data
    visibleUsers.value = data.slice(0, VISIBLE_USERS_COUNT)
  })
})

function goUp() {
  if (page.value === 0) {
    return
  }

  page.value = page.value - 1

  const prevScrollOffset = list.value.scrollHeight - list.value.scrollTop
  visibleUsers.value = users.value.slice(
    page.value * VISIBLE_USERS_COUNT,
    (page.value + 2) * VISIBLE_USERS_COUNT
  )
  list.value.scrollTop = list.value.scrollHeight - prevScrollOffset
}

function goDown() {
  page.value = page.value + 1

  const isLastPage = page.value === TOTAL_USERS_COUNT / VISIBLE_USERS_COUNT

  if (isLastPage) {
    return
  }

  visibleUsers.value = users.value.slice(
    page.value * VISIBLE_USERS_COUNT,
    (page.value + 2) * VISIBLE_USERS_COUNT
  )
}
</script>

<template>
  <div class="max-w-screen-lg mx-auto h-screen flex">
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
  </div>
</template>
