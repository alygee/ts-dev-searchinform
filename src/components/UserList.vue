<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import UserListItem from './UserListItem.vue'
import UserListItemSkeleton from './UserListItemSkeleton.vue'

const props = defineProps(['users'])
const emit = defineEmits(['goUp', 'goDown'])

let observer = null
const firstElement = ref(null)
const lastElement = ref(null)

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry && entry.isIntersecting) {
        if (entry.target.id === 'firstElement') {
          emit('goUp')
        }
        if (entry.target.id === 'lastElement') {
          emit('goDown')
        }
      }
    })
  })
})

watch(
  () => props.users,
  (newValue) => {
    if (newValue) {
      nextTick(() => {
        observer.observe(lastElement.value)
        observer.observe(firstElement.value)
      })
    }
  },
  { once: true }
)

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div class="w-1/4 bg-white border-r border-gray-300">
    <div v-if="users" class="overflow-y-auto h-screen p-3 mb-9 pb-20">
      <div id="firstElement" ref="firstElement" />
      <template v-for="user in users" :key="user.id">
        <UserListItem :user="user" />
      </template>
      <div id="lastElement" ref="lastElement" />
    </div>
    <div v-else class="overflow-y-auto h-screen p-3 mb-9 pb-20">
      <UserListItemSkeleton v-for="index in 3" :key="index" />
    </div>
  </div>
</template>
