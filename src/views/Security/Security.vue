<template>
  <div class="Security">
    <Head></Head>
    <Toolbar title="Seguridad" :items="menu"></Toolbar>
    <router-view />
  </div>
</template>
<script>
import Toolbar from "../../components/Toolbar.vue";
export default {
  name: "Security",
  components: {
    Toolbar
  },
  data() {
    return {
      menu: [
        { title: "Usuarios", to: "/Security/Users" },
        { title: "Perfil", to: "/Security/Perfil" },
        { title: "Parametros", to: "/Security/Parameters" }
      ]
    };
  }
};
</script>
