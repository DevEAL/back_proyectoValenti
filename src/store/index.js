/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import path from "../assets/params/params";
import Advance from "./modules/Advance";
import New from "./modules/New";
import Security from "./modules/Security";
import Settings from "./modules/Settings";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    close: false,
    data: [],
    Select: {},
    notification: {},
    form: {}
  },
  mutations: {
    open(state) {
      state.close = !state.close;
    },
    PushData(state, response) {
      state.data = response.data.data;
    },
    PushSelect(state, response) {
      state.Select = response.data.data;
    },
    setNotification(state, response) {
      state.notification = response;
    },
    setForm(state) {
      state.form = {};
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
    },
    PostData: async function({ commit }, url) {
      fetch(path["path"] + url["url"], {
        method: "POST",
        body: JSON.stringify(url["form"]),
        headers: {
          authorization: sessionStorage.token,
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          // eslint-disable-next-line no-console
          console.log(data);
        });
    }
  },
  modules: {
    Advance,
    New,
    Security,
    Settings
  }
});
