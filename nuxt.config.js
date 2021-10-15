import getSiteMeta from "./utils/getSiteMeta";
const meta = getSiteMeta();
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'irvb.dev',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      ...meta,
      { charset: "utf-8" },
      { name: "HandheldFriendly", content: "True" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:site_name", content: "Bob Ross" },
      {
        hid: "description",
        name: "description",
        content:
          "Articles focused on the beautiful art of landscape painting.",
      },
      { property: "og:image:width", content: "740" },
      { property: "og:image:height", content: "300" },
      { name: "twitter:site", content: "@bobross" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    link: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      {
        hid: "canonical",
        rel: "canonical",
        href: process.env.BASE_URL,
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
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

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
