import { defineStore } from "pinia"
import { axiosClient } from "~/lib"

export const useProfileStore = defineStore('profile', {
  state: () => ({
    count: 0,
    name: 'Toan',
    profile: null,
    status: '',
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
    async getProfile() {
      try {
        const response: any = await axiosClient.get('/users/profile')
        this.$state.profile = response.context
        this.$state.status = 'SUCCESS'
      } catch (error) {
        this.$state.status = 'FAIL'
      }
    }
  },
})