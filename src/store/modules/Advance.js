import path from "../../assets/params/params";

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
    GetDataAdvance: async function({ commit }, url) {
      const response = await fetch(path["path"] + url, {
        headers: {
          authorization: sessionStorage.token
        }
      });

      const data = await response.json();

      commit("pushData", data);
    }
  }
};
