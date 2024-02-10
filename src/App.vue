<template>
  <AppLayout>
    <NButton>Test</NButton>
  </AppLayout>
</template>

<script lang="ts" setup>
import AppLayout from '@/layouts/AppLayout.vue'
import { onMounted } from 'vue'
import NButton from '~/button/NButton.vue'

onMounted(() => {
  const html = document.querySelector('html') as HTMLElement
  html.setAttribute('data-theme', localStorage.getItem('theme') ?? 'dark')
})
</script>

<style lang='scss'>

</style>
