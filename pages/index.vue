<template>
  <div>
    <h2>Home</h2>
    <h3>{{ count }}</h3>
    <br />
    <h3>{{ x }}</h3>
  </div>
</template>
<script setup>
import store from '~/store';
definePageMeta(pageMeta)

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