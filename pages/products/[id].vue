<template>
  <div>
      Product detail
      <!-- {{ detail?.name }} -->
    </div>
</template>
<script setup>
definePageMeta(pageMeta)
const route = useRoute()
const { id } = route.params
// const { data } = await useFetch(`https://api.myspa.vn/v1/organizations/${id}`, {
//   transform: (res) => res.context
// })
// const detail = computed(() => data.value)

const { data } = await useAsyncData(
  'count',
  () => $fetch(`https://api.myspa.vn/v1/organizations/${id}`),
  {
    transform: (res) => res.context,
    immediate: true,
    lazy: true
  }
)
useSeoMeta({
  title: data?.value?.name,
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  ogImageSecureUrl: data?.value?.image_url,
  ogImageUrl: data?.value?.image_url
})
</script>
