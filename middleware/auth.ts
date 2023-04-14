import { AxiosError } from 'axios';
import { request } from '~/lib';
import { useProfileStore } from '~/store-hooks'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = useProfileStore()
  if (!store.$state.profile) {
    try {
      const response: any = await request.profile()
    } catch (error) {
      const err = error as AxiosError
      if (err.request?.status === 401) {
        return navigateTo(`/sign/sign-in`)
      }
    }
  }
});