<template>
  <button
    class="n-button"
    :class="[buttonClasses]"
  >
    <slot name="prepend" />
    <slot />
    <slot name="append" />
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface IProps {
  variant?: 'text' | 'outline'
  color?: string | 'primary' | 'secondary'
  size?: 'large' | 'small'
}

const props = defineProps<IProps>()

const buttonClasses = computed(() => {
  const result = []
  switch (props.variant) {
    case 'text': {
      result.push('n-button--text')
      break
    }
    case 'outline': {
      result.push('n-button--outline')
      break
    }
  }
  switch (props.size) {
    case 'large': {
      result.push('n-button--large')
      break
    }
    case 'small': {
      result.push('n-button--small')
      break
    }
  }
  return result
})

const buttonBackgroundColor = computed(() => {
  if (props.color === 'primary') return 'var(--clr-button-bg)'
  return props.color ?? 'var(--clr-button-bg)'
})

const buttonHoverBackgroundColor = computed(() => {
  const color = (props.color && props.color !== 'primary') ? props.color : getComputedStyle(document.documentElement).getPropertyValue('--clr-button-bg')
  let R = parseInt(color.substring(1, 3), 16)
  let G = parseInt(color.substring(3, 5), 16)
  let B = parseInt(color.substring(5, 7), 16)

  R = parseInt(String((R * (100 - 20) / 100)))
  G = parseInt(String(G * (100 - 20) / 100))
  B = parseInt(String(B * (100 - 20) / 100))
  // console.log(R, G, B)
  R = (R < 255) ? R : 255
  G = (G < 255) ? G : 255
  B = (B < 255) ? B : 255

  R = Math.round(R)
  G = Math.round(G)
  B = Math.round(B)

  const RR = ((R.toString(16).length === 1) ? '0' + R.toString(16) : R.toString(16))
  const GG = ((G.toString(16).length === 1) ? '0' + G.toString(16) : G.toString(16))
  const BB = ((B.toString(16).length === 1) ? '0' + B.toString(16) : B.toString(16))

  return '#' + RR + GG + BB
})

const textButtonBackgroundColor = computed(() => {
  return props.color && props.color !== 'primary' ? props.color + '19' : getComputedStyle(document.documentElement).getPropertyValue('--clr-button-bg') + '19'
})

const outlineButtonColor = computed(() => {
  return brightnessByColor.value < 127 ? '#ffffff' : '#000000'
})

const brightnessByColor = computed(() => {
  const color = '' + props.color
  const isHEX = color.indexOf('#') == 0
  const isRGB = color.indexOf('rgb') == 0
  if (isHEX) {
    const hasFullSpec = color.length === 7 || color.length === 9
    var m = color.substr(1).match(hasFullSpec ? /(\S{2})/g : /(\S{1})/g)
    if (m) {
      var r = parseInt(m[0] + (hasFullSpec ? '' : m[0]), 16)
      var g = parseInt(m[1] + (hasFullSpec ? '' : m[1]), 16)
      var b = parseInt(m[2] + (hasFullSpec ? '' : m[2]), 16)
    }
  }
  if (isRGB) {
    var m = color.match(/(\d+){3}/g)
    if (m) var r = m[0], g = m[1], b = m[2]
  }
  if (typeof r !== 'undefined') return ((r * 299) + (g * 587) + (b * 114)) / 1000
})
</script>

<style lang='scss'>
.n-button {
  padding: 12px 36px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: v-bind(buttonBackgroundColor);
  gap: 8px;

  &:hover {
    background: v-bind(buttonHoverBackgroundColor);
  }

  &--large {
    padding: 16px 48px;
  }

  &--small {
    padding: 8px 24px;
  }

  &--outline {
    background: transparent;
    border: v-bind(buttonBackgroundColor) 2px solid;
    color: v-bind(buttonBackgroundColor);
    font-weight: 500;

    &:hover {
      background: v-bind(buttonBackgroundColor);
      color: v-bind(outlineButtonColor)
    }
  }

  &--text {
    background: transparent;
    color: v-bind(buttonBackgroundColor);

    &:hover {
      background: v-bind(textButtonBackgroundColor);
    }
  }
}
</style>
