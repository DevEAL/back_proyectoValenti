import path from "../../assets/params/params";

const api = path["path"];

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    pushData(state, response) {
      state.data = response.data.data;
    }
  },
  actions: {
    GetDataSecurity: async function({ commit }, url) {
      const response = await fetch(api + url, {
        headers: {
          authorization: sessionStorage.token
        }
      });

      const data = await response.json();

      commit("pushData", data);
    }
  }
};
