<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import UserListItem from './UserListItem.vue'
import UserListItemSkeleton from './UserListItemSkeleton.vue'

const props = defineProps(['users'])

let observer = null
const lastElement = ref('')

function handleIntersect() {
  console.log('handle intersect')
}

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry && entry.isIntersecting) {
      handleIntersect()
    } else {
      console.log('piu')
    }
  })
})

watch(
  () => props.users,
  (newValue) => {
    if (newValue) {
      nextTick(() => {
        observer.observe(lastElement.value)
      })
    }
  }
)

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div class="w-1/4 bg-white border-r border-gray-300">
    <div v-if="users" class="overflow-y-auto h-screen p-3 mb-9 pb-20">
      <div v-for="user in users" :key="user.id">
        <UserListItem :user="user" />
      </div>
      <div ref="lastElement" />
    </div>
    <div v-else class="overflow-y-auto h-screen p-3 mb-9 pb-20">
      <UserListItemSkeleton v-for="index in 3" :key="index" />
    </div>
  </div>
</template>
