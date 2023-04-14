<template>
  <div>My Profile</div>
</template>
<script setup>
definePageMeta({
  ...pageMeta,
  middleware: ['auth']
})
</script>