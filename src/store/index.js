import { createStore } from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const store = createStore({
  state,
  actions,
  mutations,
  getters,
})

export default store
