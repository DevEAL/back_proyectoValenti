<template>
  <div class="Setting">
    <Head></Head>
    <Toolbar title="Configuración" :items="menu"></Toolbar>
    <router-view />
  </div>
</template>
<script>
import Toolbar from "../../components/Toolbar.vue";
export default {
  name: "Setting",
  components: {
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
