<template>
  <transition>
    <div>
      <app-snack :open="noti.open" :content="noti.content" :color="noti.color" @click-btn="closeNoti" />
      <h2>Sign up from</h2>
      <form v-if="step === 1" @submit="submitForm">
        <div>
          <v-text-field v-model="email" placeholder="Email" />
          <p>{{ errors.emailError }}</p>
        </div>
        <v-btn :loading="isLoading" type="submit">Get code</v-btn>
      </form>
      <form v-if="step === 2" @submit="onSubmit">
        <div>
          <v-text-field v-model="body.fullname" placeholder="Fullname" />
        </div>
        <div>
          <v-text-field v-model="body.telephone" placeholder="Telephone" />
        </div>
        <div>
          <v-text-field v-model="body.password" placeholder="Password" />
        </div>
        <div>
          <v-text-field v-model="body.code" placeholder="Code" />
        </div>
        <div>
          <v-text-field v-model="body.country" placeholder="Country" />
        </div>
        <v-btn :loading="isLoading" type="submit">Register</v-btn>
      </form>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query';
import { AxiosError } from 'axios';
import { BodyRegister, request } from '~/lib'
import { useForm, useField } from 'vee-validate'

interface Noti {
  content: string,
  color: string,
  open: boolean
}

const step = useState<number>('step', () => 1)
const body = useState<BodyRegister>('body', () => {
  return {
    email: '',
    fullname: '',
    telephone: '',
    password: '',
    code: '',
    country: ''
  }
})
const { handleSubmit, errors } = useForm()
const { value: email, errorMessage: emailError } = useField('email')
const noti = useState<Noti>('noti', () => {
  return {
    content: '', color: '#4caf50', open: false
  }
})
const { mutate, isLoading } = useMutation({
  mutationKey: ['SIGN-UP'],
  mutationFn: (body: BodyRegister) => step.value === 1 ? request.register({ email: body.email }) : request.register(body),
  onSuccess: () => {
    if (step.value === 1) {
      noti.value.open = true
      noti.value.content = `An email send to ${body.value.email}`
      noti.value.color = 'var(--green-dark)'
      step.value = 2
      setTimeout(() => { noti.value.open = false }, 5000)
    }
    if (step.value === 2) {
      noti.value.open = true
      noti.value.content = 'Register account success'
      noti.value.color = 'var(--green-dark)'
      setTimeout(() => { noti.value.open = false }, 5000)
    }
  },
  onError: (error: AxiosError) => {
    const data = error.response?.data as any
    noti.value.open = true
    noti.value.content = `${data?.message}`
    noti.value.color = 'var(--red)'
    setTimeout(() => { noti.value.open = false }, 5000)
  }
})
function onSubmit(e: Event) {
  e.preventDefault()
  mutate(body.value)
}

const submitForm = handleSubmit(async () => {
  console.log(email)
})

function closeNoti() {
  noti.value.open = false
}
</script>