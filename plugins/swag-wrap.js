import Vue from 'vue'
import APILib from '@julpy/swag-wrap'

export default ({ app, env, store }) => {
  const options = {
    swaggerUrl: env.CONFIG_APP.SWAGGER_JSON_URL,
    protocol: env.CONFIG_APP.API_PROTOCOL,
    apiDomain: env.CONFIG_APP.API_DOMAIN,
    apiVersion: env.CONFIG_APP.API_VERSION
  }
  console.log('+++ plugins > swag-wrap > options : ', options)
  console.log('+++ plugins > swag-wrap > APILib : ', APILib)
  let mapAPI = new APILib(options)
  Vue.prototype.$API = mapAPI
  // store.commit('setAPI', mapAPI)
}
