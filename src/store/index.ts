import { createStore, type MutationTree } from 'vuex'

export interface State {
  searchValue: string | null
}

interface Mutations {
  changeSearch: (state: State, payload: string) => void
}

const state: State = {
  searchValue: null
}

const mutations: MutationTree<State> & Mutations = {
  changeSearch(state, payload) {
    if (payload.length) {
      state.searchValue = payload
    } else {
      state.searchValue = null
    }
  }
}

const actions = {}

const getters = {}

const store = createStore({
  state,
  mutations
})

export default store
