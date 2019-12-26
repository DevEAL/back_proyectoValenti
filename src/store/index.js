import Vue from "vue";
import Vuex from "vuex";
import path from "../assets/params/params";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    close: false,
    data: []
  },
  mutations: {
    open(state) {
      state.close = !state.close;
    },
    GetData(state, getData) {
      state.data = getData;
    }
  },
  actions: {
    GetData: async function({ commit }) {
      const data = await fetch(path);
      const getdata = await data.json();
      commit("GetData", getdata);
    }
  },
  modules: {}
});
