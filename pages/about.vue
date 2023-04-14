<template>
  <div>
    <h3>{{ store.$state.name }}</h3>
    <h1>{{ store.$state.count }}</h1>
    <v-btn @click="changeCount">Change</v-btn>
  </div>
</template>
<script setup>
import { useProfileStore } from '~/store-hooks'
definePageMeta(pageMeta)

const { pending, data: posts } = useLazyFetch('https://admin.houstongarden.vn/api/villas/4?populate=*&locale=vi')
const store = useProfileStore()
function changeCount() {
  store.increment()
}
</script>