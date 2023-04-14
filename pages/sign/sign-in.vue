<template>
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
</template>
<script setup>
import { useMutation } from "@tanstack/vue-query"
import { axiosClient } from "~/lib";

const body = useState('body', () => { return { email: '', password: '' } })
const { mutate, isLoading } = useMutation({
  queryKey: ['LOGIN'],
  mutationFn: (data) => axiosClient.post('https://apihouston.click/system/auth/login', data)
})
function handleSubmit(e) {
  e.preventDefault()
  console.log(body.value)
  mutate(body.value)
}
</script>