<template>
  <div>
    <p v-if="pending">Loading...</p>
    List product
    <ul>
      <li v-for="item in products?.data" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>
<script setup>
const { data, pending } = await useFetch('https://devapi.myspa.vn/v1/organizations', {
  transform: (res) => res.context
})
const products = computed(() => data.value)
</script>