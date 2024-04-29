// https://nuxt.com/docs/api/configuration/nuxt-config

const BASE_URL = 'nuxt3-i18n-boilerplate.vercel.app'; // Change this to your domain

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n', // https://i18n.nuxtjs.org/
    'nuxt-gtag', // https://github.com/johannschopplich/nuxt-gtag#readme
    '@nuxtjs/google-fonts', // https://google-fonts.nuxtjs.org/
    '@nuxtjs/color-mode', // https://color-mode.nuxtjs.org/
  ],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'light', // default value of $colorMode.preference (dark/light/system)
    fallback: 'light',
    classSuffix: ''
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      siteurl: `https://${BASE_URL}`,
      // apiUrl: BASE_URL,
      email: 'info@domainname.com' // Change this to your email
    }
  },
  $development: { 
    runtimeConfig: {
      public: {
        siteurl: 'http://localhost:3000', 
      }
    },
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' 
    },
    defaultLocale: 'en',
    strategy: 'prefix',
    lazy: true,
    langDir: 'lang',
    customRoutes: 'config',
    locales: [
      { code: 'en', iso: 'en-GB', name: 'English', file: 'en.ts'},
      { code: 'de', iso: 'de-DE', name: 'Deutsch', file: 'de.ts'},
      { code: 'tr', iso: 'tr-TR', name: 'Türkçe', file: 'tr.ts'}
    ],
    pages: {
      about: {
        en: '/about',
        de: '/uber-uns',
        tr: '/hakkimizda',
      },
      contact: {
        en: '/contact',
        de: '/kontakt',
        tr: '/iletisim',
      },
      news: {
        en: '/news',
        de: '/nachrichten',
        tr: '/haberler',
      },
      products: {
        en: '/products',
        de: '/produkte',
        tr: '/urunler',
      },
    },
  },
  gtag: {
    id: 'G-XXXXXXXXXX'
  },
  googleFonts: {
    families: {
      // Roboto: true,
      // 'Josefin+Sans': true,
      // Lato: [100, 300],
      Raleway: [400, 700],
      // Inter: '200..700',
      // 'Crimson Pro': {
      //   wght: '200..900',
      //   ital: '200..700',
      // }
    }
  }
})