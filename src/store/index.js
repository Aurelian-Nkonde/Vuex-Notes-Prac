import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'learning core vuex',
    heading: 'here\'s your list of fav aliens',
    devs: [
    ],
  },
  getters: {
    devs(state){
      return state.devs
    }
  },
  mutations: {
    datasend(state, data){
      state.devs.push({
        name: data.name,
        age: data.age
      })
    }
  },
  actions: {
    datasend({commit}, data){
      setTimeout(() => {
        commit('datasend', data)
      }, 1000)
    }
  },
  modules: {},
});
