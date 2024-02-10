<template>
  <div class="app-layout">
    <AppHeader />
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>

import AppHeader from '@/app/AppHeader.vue'

interface IProps {
}

const props = defineProps<IProps>()

</script>

<style lang='scss'>
.app-layout {
  width: 100dvw;
  height: 100dvh;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
}

.container {
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
}

@media screen and (max-width: 1140px) {
  .container {
    margin-left: 3vw;
  }
}
</style>
