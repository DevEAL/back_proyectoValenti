import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Security from "../views/Security.vue";
import Setting from "../views/Settings.vue";
import Advance from "../views/Advance.vue";
import New from "../views/New.vue";
import Header from "../components/Header.vue";
// import Prueba from "../components/Pruebas.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/Home",
    name: "Home",
    component: Header,
    children: [{ path: "Users", component: Advance }]
  },
  {
    path: "/Advance",
    name: "Advance",
    component: Advance
  },
  {
    path: "/New",
    name: "New",
    component: New
  },
  {
    path: "/Security",
    name: "Security",
    component: Security,
    children: [{ path: "Users", component: Home }]
  },
  {
    path: "/Settings",
    name: "Settings",
    component: Setting
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
