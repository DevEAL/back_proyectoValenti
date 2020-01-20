import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import path from "./assets/params/params";
import axios from "axios";
import VueAxios from "vue-axios";
import Loading from "./components/Loading.vue";
import Header from "./components/Header/Header.vue";
import Table from "./components/Table.vue";
import Notification from "./components/Notification.vue";

Vue.use(VueAxios, axios);
Vue.component("Load", Loading);
Vue.component("Notify", Notification);
Vue.component("Head", Header);
Vue.component("Table", Table);

Vue.config.productionTip = false;

Vue.prototype.$Api = path;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
