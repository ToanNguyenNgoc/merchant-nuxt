<template>
  <v-btn :variant="variant" @click="onClick">
    <slot />
  </v-btn>
</template>
<script setup>

defineProps({
  variant: {
    type: String,
    default: 'tonal'
  }
})
const emits = defineEmits(['click'])
const onClick = () => emits('click')
</script>