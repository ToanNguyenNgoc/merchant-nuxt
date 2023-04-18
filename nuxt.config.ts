// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiURL: process.env.NUXT_PUBLIC_API_BASE
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: [
    '@/assets/main.css',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css'
  ],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@pinia/nuxt',
  ],
})
