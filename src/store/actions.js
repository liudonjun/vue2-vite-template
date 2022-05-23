import * as types from './mutation-types'

export function updateDemo({ commit, state }, demo) {
  commit(types.DEMO_NAME, demo)
}
