import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import path from "./assets/params/params";

Vue.config.productionTip = false;

Vue.prototype.$Api = path;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
