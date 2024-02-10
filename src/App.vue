<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<script lang="ts" setup>
import AppLayout from '@/layouts/AppLayout.vue'
import { onMounted } from 'vue'

onMounted(() => {
  const html = document.querySelector('html') as HTMLElement
  html.setAttribute('data-theme', localStorage.getItem('theme') ?? 'dark')
})
</script>

<style lang='scss'>

</style>
