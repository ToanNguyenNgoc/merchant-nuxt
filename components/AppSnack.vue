<template>
  <v-snackbar location="top right" variant="tonal" :color="color" :model-value="open" >
    <div class="container">
      <div>
        <h3>Thông báo</h3>
        <span>{{ content }}</span>
      </div>
      <button class="btn" @click="onButtonAction">{{ titleBtn }}</button>
    </div>
  </v-snackbar>
</template>
<script setup lang="ts">
defineProps({
  content: {
    type: String,
    default: ''
  },
  open: {
    type: Boolean, default: false
  },
  color: { type: String, default: '#4caf50' },
  titleBtn: { type: String, default: '' }
})

const emits = defineEmits(['click-btn'])
function onButtonAction() {
  emits('click-btn')
}
</script>
<style scoped >
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.btn {
  font-weight: 700;
}
</style>