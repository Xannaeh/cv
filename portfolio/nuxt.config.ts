// nuxt.config.js
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  css: ['~/assets/styles/global.css'],

  plugins: [
    { src: '~/plugins/gsap-plugin.js', mode: 'client' }
  ],

  postcss: {
    plugins: {
      // Add your custom PostCSS plugins here
      // 'postcss-nested': {}, 
      // 'autoprefixer': {}
    }
  },

  compatibilityDate: '2025-01-03'
})