import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tagList: []
  },
  mutations: {
    setTagList(state, data){
      state.tagList = data
    }
  },
  actions: {
  },
  modules: {
  }
})
