<template>
  <div>
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn class="ma-2" tile outlined dark color="white" v-on="on">
            <v-icon left dark>fa-user</v-icon> name
          </v-btn>
        </template>
        <v-list dense nav>
          <v-list-item v-for="n in 2" :key="n" @click="() => {}">
            <v-list-item-title>
              <v-icon>fa-user</v-icon> Option {{ n }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <Navigation v-model="drawer"></Navigation>
  </div>
</template>
<script>
import Navigation from "./Navigation.vue";

export default {
  name: "Header",
  components: {
    Navigation
  },
  data() {
    return {
      title: "Proyecto Valenti",
      drawer: false
    };
  }
};
</script>
