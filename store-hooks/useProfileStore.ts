import { defineStore } from "pinia"
import { key } from "~/constant"
import { request } from "~/lib"
import { storage } from '~/utils'

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
    async getProfile(token?: string) {
      try {
        const response = await request.profile(token)
        this.$state.profile = response.data
        this.$state.status = 'SUCCESS'
      } catch (error) {
        this.$state.status = 'FAIL'
      }
    },
    onLogout() {
      const { removeItem } = storage()
      this.$state.profile = null
      removeItem(key.TK, 'local')
      removeItem(key.RTK, 'local')
      removeItem(key.TKE, 'local')
      navigateTo('/')
    }
  },
})