export const state = () => ({
  LIST: []
})

export const mutations = {
  CREATE_TOAST (state, data) {
    state.LIST.push(data)
  },
  REMOVE_TOAST (state, data) {
    state.LIST.splice(data, 1)
  }
}

export const getters = {
}

export const actions = {
}
