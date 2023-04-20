<template>
  <transition>
    <div>
      <app-alert :open="noti.open" :content="noti.content" :color="noti.color" @on-close="noti.open = false" />
      <form @submit="handleSubmit" autocomplete="off">
        <div class="row">
          <input class="input-gl" v-model="body.email" placeholder="Email" />
          <!-- <p class="row-error">Vui lòng nhập email</p> -->
        </div>
        <div class="row">
          <input class="input-gl" v-model="body.password" placeholder="Mật khẩu" type="password" />
          <!-- <p class="row-error">Vui lòng nhập mật khẩu</p> -->
        </div>
        <div class="form-btn">
          <v-btn :disabled="(body.email !== '' && body.password !== '') ? false : true" size="large" :loading="isLoading"
            type="submit">Đăng nhập</v-btn>
          <NuxtLink to="/">Quên mật khẩu</NuxtLink>
        </div>
      </form>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { useMutation } from "@tanstack/vue-query"
import { storage } from "~/utils";
import { request } from '~/lib'
import { useProfileStore } from '~/store-hooks'
import { AxiosError } from "axios"

interface Body { email: string; password: string }

const router = useRouter()
const profileStore = useProfileStore()
const body = useState<Body>('body', () => { return { email: '', password: '' } })
const noti = useState('noti', () => {
  return {
    content: '', color: '#4caf50', open: false
  }
})
const { mutate, isLoading } = useMutation({
  mutationKey: ['LOGIN'],
  mutationFn: (data: Body) => request.login(data),
  onSuccess: async (response) => {
    storage().setItem('nuxt_tk', response.data?.token, 'local')
    storage().setItem('tk_ex', response.data?.token_expired_at, 'local')
    storage().setItem('nuxt_re_tk', response.data.refresh_token, 'local')
    profileStore.getProfile(response.data?.token)
    router.replace('/')
  },
  onError: (error: AxiosError<any>) => {
    noti.value.open = true
    noti.value.content = `${error.response?.data?.message}`
    noti.value.color = 'var(--red)'
    setTimeout(() => { noti.value.open = false }, 4000)
  }
})
function handleSubmit(e: Event) {
  e.preventDefault()
  mutate(body.value)
}
</script>
<style scoped>
.form-btn {
  margin-top: 24px;
}

.form-btn button {
  width: 100%;
  background-color: var(--primary);
  color: var(--white);
  text-transform: capitalize;
}

.form-btn a {
  display: block;
  margin-top: 16px;
  text-align: end;
  color: var(--grey-4);
  font-size: 14px;
  line-height: 16px;
}
</style>