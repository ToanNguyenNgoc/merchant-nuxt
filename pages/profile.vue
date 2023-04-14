<template>
  <div>
    <div>My Profile</div>
    <h3>{{ storeProfile.$state.profile?.fullname }}</h3>
    <v-btn @click="handleLogout">Logout</v-btn>
  </div>
</template>
<script setup>
import { useProfileStore } from '~/store-hooks';
definePageMeta(pageMeta)

const storeProfile = useProfileStore()
function handleLogout() {
  storeProfile.onLogout()
}
</script>