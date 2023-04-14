<template>
  <Transition>
    <div>
      <div>My Profile</div>
      <h3>{{ storeProfile.$state.profile?.fullname }}</h3>
      <v-btn @click="handleLogout">Logout</v-btn>
    </div>
  </Transition>
</template>
<script setup>
import { useProfileStore } from '~/store-hooks';

definePageMeta({
  ...pageMeta,
  middleware: ['auth']
})
const storeProfile = useProfileStore()
function handleLogout() {
  storeProfile.onLogout()
}
</script>