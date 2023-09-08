import { createStore, type ActionContext, type MutationTree } from 'vuex'
import { type User } from '@/types'
import { getUserById, getUserByIdOrName } from '@/services'

export interface RootState {
  state: State
}

export interface State {
  searchValue: string | null
  employee: User | null
  results: User[] | null
  employeeStatus: Statuses
  employeeError: string | null
  resultsStatus: Statuses
  resultsError: string | null
}

const initialState: State = {
  employee: null,
  employeeError: null,
  employeeStatus: 'nothing',
  results: null,
  resultsError: null,
  resultsStatus: 'nothing',
  searchValue: null
}

interface Mutations {
  changeSearch: (state: State, payload: string) => void
  resetState: (state: State) => void
}

type Statuses = 'loading' | 'error' | 'success' | 'nothing'

const state: State = JSON.parse(JSON.stringify(initialState))

const mutations: MutationTree<State> & Mutations = {
  changeSearch(state, payload) {
    if (payload.length) {
      state.searchValue = payload
    } else {
      state.searchValue = null
    }
  },
  resetState(state) {
    state.employee = initialState.employee
    state.employeeError = initialState.employeeError
    state.employeeStatus = initialState.employeeStatus
    state.results = initialState.results
    state.resultsError = initialState.resultsError
    state.resultsStatus = initialState.resultsStatus
    state.searchValue = initialState.searchValue
  }
}

type ActionsContext = ActionContext<State, any>

const actions = {
  async fetchUsersForResults({ state }: ActionsContext) {
    state.resultsStatus = 'loading'

    state.results = initialState.results
    state.resultsError = initialState.resultsError
    try {
      const results = await getUserByIdOrName(state.searchValue ?? '')

      state.results = results

      state.resultsStatus = 'success'
    } catch (error) {
      state.resultsStatus = 'error'
      if (error instanceof Error) {
        state.resultsError = error.message
      } else {
        state.resultsError = 'Произошла неизвестная ошибка'
      }
    } finally {
      if (!state.searchValue) state.resultsStatus = 'nothing'
    }
  },
  async fetchUserForEmployee({ state }: ActionsContext, id: number) {
    state.employeeStatus = 'loading'

    state.employee = initialState.employee
    state.employeeError = initialState.employeeError

    try {
      const employee = await getUserById(id)

      state.employee = employee

      state.employeeStatus = 'success'
    } catch (error) {
      state.employeeStatus = 'error'
      if (error instanceof Error) {
        state.employeeError = error.message
      } else {
        state.employeeError = 'Произошла неизвестная ошибка'
      }
    }
  }
}

const store = createStore({
  state,
  mutations,
  actions
})

export default store
