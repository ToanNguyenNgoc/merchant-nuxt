import { axiosClient } from '~/lib';
import { useProfileStore } from '~/store-hooks'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = useProfileStore()
  if (!store.$state.profile) {
    try {
      const response: any = await axiosClient.get('/users/profile')
    } catch (error) {
      return navigateTo('/sign/sign-in');
    }
  }
});