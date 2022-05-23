import * as types from './mutation-types'

const mutations = {
  [types.DEMO_NAME](state, demo) {
    state.demo = demo
  }
}

export default mutations
