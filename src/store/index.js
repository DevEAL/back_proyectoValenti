/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import path from "../assets/params/params";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    close: false,
    data: [],
    Select: {}
  },
  mutations: {
    open(state) {
      state.close = !state.close;
    },
    PushData(state, response) {
      state.data = response.data.data;
    },
    PushSelect(state, response) {
      state.Select = response.data.data.map(function(obj) {
        let arrayTemporal = [];
        arrayTemporal = obj.name;
        return arrayTemporal;
      });
    }
  },
  actions: {
    GetData: async function({ commit }, url) {
      const response = await fetch(path["path"] + url["url"], {
        headers: {
          authorization: sessionStorage.token
        }
      });
      const data = await response.json();

      commit(url["opt"], data);
    }
  },
  modules: {}
});
