<template>
  <div class="app-sidebar">
    <div class="container">
      <NButton @click="toggleTheme">
        sakdjflkasjklfdj
      </NButton>
    </div>
  </div>
</template>

<script lang="ts" setup>

import NButton from '~/button/NButton.vue'

function toggleTheme () {
  const html = document.querySelector('html')
  const currentTheme = html.getAttribute('data-theme')

  if (currentTheme === 'dark') {
    setTheme('light')
  } else {
    setTheme('dark')
  }
}

function setTheme (theme) {
  const html = document.querySelector('html')
  html.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}
</script>

<style lang='scss'>
.app-sidebar {
  width: 100%;
  padding: 12px 24px;
  transition: all .2s ease-in-out;
  background: var(--clr-bg-secondary);
  z-index: 1000;

  &:hover {
    left: 0;

  }
}
</style>
