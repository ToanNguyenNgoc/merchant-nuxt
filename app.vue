<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useProfileStore } from '~/store-hooks'
import { storage } from '~/utils'

const store = useProfileStore()
if (storage().getItem('nuxt_tk', 'local')) {
  store.getProfile()
}
</script>
<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
