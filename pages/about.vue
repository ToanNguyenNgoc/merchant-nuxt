<template>
  <h3>About</h3>
</template>
<script setup>
definePageMeta(pageMeta)
const { pending, data: posts } = useLazyFetch('https://admin.houstongarden.vn/api/villas/4?populate=*&locale=vi')
</script>