<template>
  <div :class="[open ? 'container-act' : '']" class="container" @click="onClose">
    <div @click="onDialogClick" :class="[open ? 'cnt-dialog-act' : '']" class="cnt-dialog">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  open: { type: Boolean, default: false }
})
const emits = defineEmits(['on-hide'])
function onClose() {
  emits('on-hide')
}
function onDialogClick(e: Event) {
  e.stopPropagation()
}
</script>
<style scoped>
.container {
  width: 100vw;
  height: 100dvh;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  transition: var(--trans);
  background-color: #00000014;
  backdrop-filter: blur(1px);
}

.container-act {
  visibility: visible;
  top: 0;
  opacity: 1;
  transition: var(--trans);
}

.cnt-dialog {
  min-width: 300px;
  max-width: 100%;
  width: max-content;
  min-height: 200px;
  max-height: 100%;
  height: max-content;
  background-color: var(--white);
  padding: 24px;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  visibility: hidden;
  margin-top: 20px;
  opacity: 0;
  transition: var(--trans);
}

.cnt-dialog-act {
  visibility: visible;
  margin-top: 0px;
  opacity: 1;
  transition: var(--trans);
}
</style>