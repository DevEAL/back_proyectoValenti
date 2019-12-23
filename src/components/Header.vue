<template>
  <div>
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>fa-user</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      title: "Proyecto Valenti"
    };
  }
};
</script>
