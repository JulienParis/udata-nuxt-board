const dotenv = require('dotenv')
dotenv.config()


console.log(
  '>>> nuxt.config.js (start) / process.env.SWAGGERURL : ',
  process.env.SWAGGERURL
)

// - - - - - - - - - - - - - - - - - - - - - - - -
// CONFIG APP OBJECT
const configApp = {
  SWAGGER_JSON_URL: process.env.SWAGGER_JSON_URL,
  API_PROTOCOL: process.env.API_PROTOCOL,
  API_DOMAIN: process.env.API_DOMAIN,
  API_VERSION: process.env.API_VERSION,
}

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /* custom env variables for nuxt
    ** cf : https://github.com/nuxt/nuxt.js/issues/1789
    */
  env: {
    LOG_MODE: Boolean(configApp.LOG_MODE),
    CONFIG_APP: configApp
  },

  /*
   ** Routes and middlewares to load before loading routes
   */
  // router: {
  //   middleware: [
  //     // 'setApi'
  //   ]
  // },

  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/swag-wrap', mode: 'client' },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
