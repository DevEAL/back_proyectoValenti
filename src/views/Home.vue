<template>
  <div class="home">
    <Header></Header>
    <v-content>
      <h1>Hello</h1>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
export default {
  name: "home",
  components: {
    Header
  }
};
</script>
