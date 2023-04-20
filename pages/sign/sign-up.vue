<template>
  <transition>
    <div>
      <app-alert :open="noti.open" :content="noti.content" :color="noti.color" @on-close="noti.open = false" />
      <form v-if="step === 1" @submit="onSubmit">
        <div class="row">
          <input class="input-gl" v-model="body.email" placeholder="Email" />
        </div>
        <div class="form-btn">
          <v-btn size="large" :loading="isLoading" type="submit">Lấy mã</v-btn>
        </div>
      </form>
      <form v-if="step === 2" @submit="onSubmit">
        <div class="row">
          <input class="input-gl" v-model="body.fullname" placeholder="Họ và tên" />
        </div>
        <div class="row">
          <input class="input-gl" v-model="body.telephone" placeholder="Số điện thoại" />
        </div>
        <div class="row row-email">
          <input disabled class="input-gl" v-model="body.email" placeholder="Email" />
          <v-btn @click="step = 1" variant="text" class="change-email">Đổi email</v-btn>
        </div>
        <div class="row">
          <input type="password" class="input-gl" v-model="body.password" placeholder="Mật khẩu" />
        </div>
        <div class="row">
          <input class="input-gl" v-model="body.code" placeholder="Mã OTP" />
        </div>
        <div class="row">
          <input class="input-gl" v-model="body.country" placeholder="Quốc gia" />
        </div>
        <div class="form-btn">
          <v-btn size="large" :loading="isLoading" type="submit">Đăng ký</v-btn>
        </div>
      </form>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query';
import { AxiosError } from 'axios';
import { BodyRegister, request } from '~/lib'

interface Noti {
  content: string,
  color: string,
  open: boolean
}
const initialBody = {
  email: '',
  fullname: '',
  telephone: '',
  password: '',
  code: '',
  country: ''
}
const router = useRouter()
const step = useState<number>('step', () => 1)
const body = useState<BodyRegister>('body', () => {
  return initialBody
})
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
      setTimeout(() => { step.value = 2 }, 100)
      setTimeout(() => { noti.value.open = false }, 5000)
    }
    if (step.value === 2) {
      noti.value.open = true
      noti.value.content = 'Register account success'
      noti.value.color = 'var(--green-dark)'
      setTimeout(() => {
        noti.value.open = false,
          router.replace('/sign/sign-in'),
          body.value = initialBody
      }, 3000)
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

function closeNoti() {
  noti.value.open = false
}
</script>
<style scoped>
.form-btn {
  margin-top: 24px;
  width: 100%;
}

.form-btn button {
  width: 100%;
  color: var(--white);
  text-transform:capitalize;
  background-color: var(--primary);
}

.change-email {
  position: absolute;
  right: 0;
  text-transform: lowercase;
  color: var(--primary);
  font-weight: 500;
  margin-top: 5px;
}
</style>