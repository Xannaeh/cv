export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vue-email/nuxt',
    ['@nuxtjs/i18n', {
      locales: [
        { code: 'en', language: 'en-US', file: 'en-US.json' },
        { code: 'es', language: 'es-ES', file: 'es-ES.json' }
      ],
      defaultLocale: 'en',
      strategy: 'prefix_except_default',
      detectBrowserLanguage: false,
      langDir: 'locales',
      vueI18n: './i18n.config.ts',
    }]
  ],

  css: ['~/assets/styles/global.css'],

  plugins: [
    { src: '~/plugins/gsap-plugin.js', mode: 'client' }
  ],

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['v-progress-circular'].includes(tag),
    },
  },

  compatibilityDate: '2025-01-04',
});
