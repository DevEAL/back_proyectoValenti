<template>
  <div class="home">
    <Header></Header>
    <v-content>
      <router-view />
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
export default {
  name: "Home",
  components: {
    Header
  }
};
</script>
