export const state = () => ({
  log: process.env.LOG_MODE,
  configApp: process.env.CONFIG_APP,
  mapAPI: undefined,
  swaggerObject: undefined,
})

export const getters = {
  getSwagger: (state) => {
    return state.swaggerObject
  },
}

export const mutations = {
  setAPI(state, mapAPI) {
    state.mapAPI = mapAPI
  }
}

export const actions = {}
