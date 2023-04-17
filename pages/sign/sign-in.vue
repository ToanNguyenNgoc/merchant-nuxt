<template>
  <transition>
    <div>
      sign in form
      <form @submit="handleSubmit">
        <div>
          <label>Email</label>
          <v-text-field v-model="body.email" placeholder="Email" />
        </div>
        <div>
          <label>Password</label>
          <v-text-field v-model="body.password" placeholder="Password" />
        </div>
        <v-btn :loading="isLoading" type="submit">Login</v-btn>
      </form>
    </div>
  </transition>
</template>
<script setup>
import { useMutation } from "@tanstack/vue-query"
import { storage } from "~/utils";
import { request } from '~/lib'
import { useProfileStore } from '~/store-hooks'

const router = useRouter()
const profileStore = useProfileStore()
const body = useState('body', () => { return { email: '', password: '' } })
const { mutate, isLoading } = useMutation({
  queryKey: ['LOGIN'],
  mutationFn: (data) => request.login(data),
  onSuccess: async (response) => {
    storage().setItem('nuxt_tk', response.data?.token, 'local')
    storage().setItem('tk_ex', response.data?.token_expired_at, 'local')
    storage().setItem('nuxt_re_tk', response.data.refresh_token, 'local')
    profileStore.getProfile(response.data?.token)
    router.back()
  }
})
function handleSubmit(e) {
  e.preventDefault()
  mutate(body.value)
}
</script>