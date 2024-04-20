// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@vueuse/nuxt', 
    "@nuxtjs/supabase",
  ],
  supabase: {redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/*'], // auth behaviour in the auth middleware
    }
 },
  
})