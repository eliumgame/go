// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },

  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    "nuxt-auth-utils",
    "@nuxt/image",
    "nuxt-icon",
    "@nuxt/fonts",
    "@nuxt/ui",
    "@nuxtjs/plausible"
  ],

  extends: [
    '@nuxt/ui-pro'
  ],

  hub: {
    database: true,
  },

  fonts: {
    families: [
      { name: 'Space Grotesk', provider: 'google' }
    ]
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  ui: {
    icons: ['heroicons', 'simple-icons']
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },

  runtimeConfig: {
    public: {
      hostname: ''
    }
  },

  routeRules: {
    '/': {
      redirect: '/admin/home' // Because of the server route [uid] (/server/routes/[uid].ts), pages at the root will be ignored, all the frontend is on /admin, a redirection is performed if the user arrives at the root.
    }
  },

  nitro: {
    experimental: {
      openAPI: true
    }
  },

  devtools: { enabled: true },
})
