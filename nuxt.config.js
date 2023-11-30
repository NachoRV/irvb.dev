// import getSiteMeta from "./utils/getSiteMeta";
// const meta = getSiteMeta();
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'irvb.dev',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      /// ...meta,
      { name="google-adsense-account" content="ca-pub-3715249238838145"},
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Artículos sobre programación web, javascript, css, git, html",
      },
      { name: "twitter:site", content: "@_irvb" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    link: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.ico" },
      {
        hid: "canonical",
        rel: "canonical",
        href: process.env.BASE_URL,
      },
    ],
    script: [
      {
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3715249238838145",
        async: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@/assets/css/normalize.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://google-analytics.nuxtjs.org/setup
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content',
  ],
  content: {
    nestedProperties: ['author.name'],
  },
// googleAnalytics config
  googleAnalytics: {
    id: 'UA-185378495-1',
    layer: 'dataLayer',
    pageTracking: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
