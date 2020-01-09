<template>
  <div class="Setting">
    <Header></Header>
    <Toolbar title="Configuración" :items="menu"></Toolbar>
    <router-view />
  </div>
</template>
<script>
import Header from "../../components/Header.vue";
import Toolbar from "../../components/Toolbar.vue";
export default {
  name: "Setting",
  components: {
    Header,
    Toolbar
  },
  data() {
    return {
      menu: [
        { title: "Permisos", to: "/Settings/Permisos" },
        { title: "Logos", to: "/Settings/Logos" }
      ]
    };
  }
};
</script>
