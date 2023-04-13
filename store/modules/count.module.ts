import { ModuleTree, Module, Commit } from "vuex"

interface Count {
  count: number
}

const countModule: Module<Count, any> = {
  state: () => ({
    count: 0
  }),
  getters: {
    countDesc(state) {
      return state.count = 10
    },
    countDesc2(state) {
      return state.count = 11
    }
  },
  mutations: {
    ['ASC_COUNT'](state, payload: number) {
      state.count = state.count + payload
    }
  },
  actions: {
    ACS_COUNT({ commit }: { commit: Commit }, payload: number) {
      commit('ASC_COUNT', payload)
    }
  }
}
export default countModule