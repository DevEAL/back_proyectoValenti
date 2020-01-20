/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import path from "../assets/params/params";
import Advance from "./modules/Advance";
import New from "./modules/New";
import Security from "./modules/Security";
import Settings from "./modules/Settings";
import router from "../router";

const api = path["path"];

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    alert: false,
    dataAlert: {
      type: "success",
      text: "Texto de la alerta"
    },
    data: [],
    Loading: false,
    Select: {},
    form: {},
    close: false,
    notificationState: false,
    notification: {}
  },
  mutations: {
    setAlert(state, response) {
      state.alert = true;
      state.dataAlert = {
        type: response.type,
        text: response.text
      };
    },
    setAlertClose(state) {
      state.alert = false;
    },
    setClearData(state) {
      state.data = [];
    },
    PushData(state, response) {
      state.data = response.data.data;
    },
    PushSelect(state, response) {
      state.Select = response.data.data;
    },
    setForm(state) {
      state.form = {};
    },
    setLoading(state) {
      state.Loading = !state.Loading;
    },
    open(state) {
      state.close = !state.close;
    },
    setNotification(state, response) {
      state.notificationState = !state.notificationState;
      state.notification = {
        type: response.type,
        text: response.text
      };
    },
    setNotificationClose(state) {
      state.notificationState = !state.notificationState;
    }
  },
  actions: {
    GetData: async function({ commit }, data) {
      const response = await fetch(api + data["url"], {
        headers: {
          authorization: sessionStorage.token
        }
      });
      const dataResponse = await response.json();

      commit(data["opt"], dataResponse);
    },
    Login: async function({ commit }, form) {
      commit("setLoading");
      const response = await fetch(api + "Login", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const dataResponse = await response.json();
      let status = dataResponse.statusCode;
      switch (status) {
        case 200:
          // eslint-disable-next-line no-case-declarations
          let data = dataResponse.data.data[0];

          for (let item in data) {
            sessionStorage.setItem(item, data[item]);
          }
          commit("setLoading");
          router.push("/Home");
          break;
        case 210:
          // eslint-disable-next-line no-case-declarations
          let item = {
            type: "warning",
            text: "Datos Erroneos"
          };
          commit("setLoading");
          commit("setAlert", item);
          break;
      }
    },
    Logout: async function({ commit }, name) {
      commit("setLoading");
      const response = await fetch(api + "Logout", {
        method: "POST",
        body: JSON.stringify(name),
        headers: {
          authorization: sessionStorage.token,
          "Content-Type": "application/json"
        }
      });

      const dataResponse = await response.json();

      if (dataResponse.statusCode == 200) {
        sessionStorage.clear();
        commit("setLoading");
        commit("setClearData");
        router.push("/");
      }
    },
    PostData: async function({ commit }, data) {
      commit("setLoading");
      const response = await fetch(api + data.url, {
        method: "POST",
        body: JSON.stringify(data.form),
        headers: {
          authorization: sessionStorage.token,
          "Content-Type": "application/json"
        }
      });
      const dataResponse = await response.json();
      if (dataResponse.statusCode == 201) {
        let notify = {
          type: "success",
          text: "Registro Exitoso"
        };
        commit("setNotification", notify);
        commit("open");
        commit("setLoading");
      }
    }
  },
  modules: {
    Advance,
    New,
    Security,
    Settings
  }
});
