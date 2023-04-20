<template>
  <div>
    <home-banner/>
    <v-btn @click="onLogoutClick">Out</v-btn>
  </div>
</template>
<script setup lang="ts">
import {useProfileStore} from '~/store-hooks'

const profileStore = useProfileStore()
definePageMeta(pageMeta)
function onLogoutClick(){
  profileStore.onLogout()
}


</script>
<style>

</style>