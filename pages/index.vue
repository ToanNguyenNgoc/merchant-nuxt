<template>
  <div>
    <div>{{ count }}</div>
    <app-button @click="onCount" variant="text">Home btn</app-button>
  </div>
</template>
<script setup>
import { mapState } from 'vuex';
import store from '~/store';
const count = computed(() => store.state.countModule.count)
const x = computed(() => store.getters['countDesc'])
const onCount = () => {
  store.dispatch('ACS_COUNT', 10)
}

</script>
<style>
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}

.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>