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
    GetData: async function({ commit }, url) {
      const response = await fetch(path["path"] + url, {
        headers: {
          authorization: sessionStorage.token
        }
      });

      const data = await response.json();

      commit("pushData", data);
    },
    PostData: async function(url) {
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
  }
};
