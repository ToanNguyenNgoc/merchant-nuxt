<template>
  <div>
    <div>Sign</div>
    <ul>
      <li>
        <NuxtLink to="/sign/sign-in">Sign in</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/sign/sign-up">Sign up</NuxtLink>
      </li>
    </ul>
    <NuxtPage />
  </div>
</template>
<script setup>
definePageMeta({ ...pageMeta, layout: 'sign-layout' })
</script>