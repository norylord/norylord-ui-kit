<template>
  <div class="app-layout">
    <AppSidebar />
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>

import AppSidebar from '@/app/AppSidebar.vue'

interface IProps {
}

const props = defineProps<IProps>()

</script>

<style lang='scss'>
.app-layout {
  width: 100dvw;
  height: 100dvh;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
}
</style>
