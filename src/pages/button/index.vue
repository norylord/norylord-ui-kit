<template>
  <div class="button-page">
    <h1 class="page-title">
      Button
    </h1>

    <h2 class="page-subtitle">
      Variant
    </h2>
    <div class="page-section">
      <div class="page-subsection">
        <NButton
          variant="outline"
          :color="'primary'"
        >
          Outline
        </NButton>
        <NButton variant="text">
          Text
        </NButton>
        <NButton
          :color="'primary'"
        >
          Without variant
        </NButton>
      </div>
    </div>
    <h2 class="page-subtitle">
      Size
    </h2>
    <div class="page-section">
      <div class="page-subsection">
        <NButton
          size="small"
          variant="outline"
          :color="'primary'"
        >
          Small
        </NButton>
        <NButton
          variant="outline"
        >
          Primary
        </NButton>
        <NButton
          variant="outline"
          :color="'primary'"
          size="large"
        >
          Large
        </NButton>
      </div>
      <div class="page-subsection">
        <NButton
          size="small"
          variant="text"
          :color="'primary'"
        >
          Small
        </NButton>
        <NButton variant="text">
          Primary
        </NButton>
        <NButton
          :color="'primary'"
          size="large"
          variant="text"
        >
          Large
        </NButton>
      </div>
      <div class="page-subsection">
        <NButton
          size="small"
          :color="'primary'"
        >
          Small
        </NButton>
        <NButton>
          Primary
        </NButton>
        <NButton
          :color="'primary'"
          size="large"
        >
          Large
        </NButton>
      </div>
    </div>
    <h2 class="page-subtitle">
      Colors
    </h2>

    <div class="page-section">
      <div class="page-subsection">
        <NButton
          variant="outline"
          :color="'#ff0000'"
        >
          #ff0000
        </NButton>
        <NButton
          variant="outline"
          :color="'#000000'"
        >
          #000000
        </NButton>
        <NButton
          variant="outline"
          :color="'#8a2626'"
        >
          #8a2626
        </NButton>
        <NButton
          variant="outline"
          :color="'#00baff'"
        >
          #00baff
        </NButton>
        <NButton
          variant="text"
          :color="'#00ff00'"
        >
          green
        </NButton>
        <NButton
          :color="'#2585e9'"
        >
          #2585e9
        </NButton>
        <NButton
          :color="'primary'"
        >
          primary
        </NButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import NButton from '~/button/NButton.vue'

interface IProps {
}

const props = defineProps<IProps>()
</script>

<style lang='scss'>
.button-page {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
