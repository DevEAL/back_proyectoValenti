<template>
  <div class="home">
    <Header></Header>
    <v-content>
      <Navigation></Navigation>
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
