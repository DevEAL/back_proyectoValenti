<template>
  <div>
    <v-navigation-drawer v-model="drawer" temporary app>
      <Navigation />
    </v-navigation-drawer>
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <Dropdown :name="name" />
    </v-app-bar>
  </div>
</template>
<script>
import Dropdown from "./Dropdown.vue";
import Navigation from "./Navigation.vue";
export default {
  name: "Header",
  components: {
    Dropdown,
    Navigation
  },
  data() {
    return {
      title: "Proyecto Valenti",
      name: sessionStorage.eal_name,
      drawer: false
    };
  }
};
</script>
