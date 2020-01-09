import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Security from "../views/Security/Security.vue";
import Setting from "../views/Settings/Settings.vue";
import Advance from "../views/Advance.vue";
import New from "../views/New.vue";
import Header from "../components/Header.vue";
import Prueba from "../components/Pruebas.vue";
import User from "../views/Security/User.vue";
import Perfil from "../views/Security/Perfil.vue";
import Parameters from "../views/Security/Parameters.vue";
import Logo from "../views/Settings/Logo.vue";
import Permisos from "../views/Settings/Permisos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { title: "Login" }
  },
  {
    path: "/Home",
    name: "Home",
    component: Header,
    meta: { title: "Home" }
  },
  {
    path: "/Advance",
    name: "Advance",
    component: Advance,
    meta: { title: "Avances de Obras" }
  },
  {
    path: "/New",
    name: "New",
    component: New,
    meta: { title: "Boletines" }
  },
  {
    path: "/Security",
    name: "Security",
    component: Security,
    meta: { title: "Seguridad" },
    children: [
      {
        path: "Users",
        component: User,
        meta: { title: "Usuarios" }
      },
      {
        path: "Perfil",
        component: Perfil,
        meta: { title: "Perfiles" }
      },
      {
        path: "Parameters",
        component: Parameters,
        meta: { title: "Parametros" }
      }
    ]
  },
  {
    path: "/Settings",
    name: "Settings",
    component: Setting,
    meta: { title: "Configuración" },
    children: [
      {
        path: "Logos",
        component: Logo,
        meta: { title: "Logos" }
      },
      {
        path: "Permisos",
        component: Permisos,
        meta: { title: "Permisos" }
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    component: Prueba
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
