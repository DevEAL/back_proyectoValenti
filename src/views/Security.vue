<template>
  <div class="Security">
    <Header></Header>
    <Toolbar title="Seguridad" :items="menu"></Toolbar>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Toolbar from "../components/Toolbar.vue";
export default {
  name: "Security",
  components: {
    Header,
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
