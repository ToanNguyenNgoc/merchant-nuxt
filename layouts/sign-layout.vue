<template>
  <div class="login">
    <v-container class="login-cnt">
      <div class="login-cnt_head">
        <v-btn @click="onBackHome" class="login-cnt_head-btn" icon="mdi-home-outline" density="comfortable"
          color="grey-lighten-3">
        </v-btn>
      </div>
      <div class="login-cnt_body">
        <div class="login-cnt_child">
          <slot />
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
function onBackHome() {
  router.replace('/')
}
</script>
<style scoped>
.login {
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url('~/assets/images/background.jpeg');
  background-size: cover;
}

.login-cnt_body {
  margin-top: 32px;
  display: flex;
  justify-content: flex-end;
}

.login-cnt_child {
  width: 45%;
  background-color: var(--v-theme-background);
  padding: 24px 16px;
  border-radius: 8px;
}

.login-cnt_head-btn {
  text-transform: capitalize
}
@media only screen and (max-width: 1023px) {
  .login-cnt{
    height: 100dvh;
  }
  .login-cnt_body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100% - 46px);;
    margin: 0px;
  }
  .login-cnt_child{
    width: 100%;
  } 
}
</style>