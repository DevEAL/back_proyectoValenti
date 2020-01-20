<template>
  <v-list dense nav>
    <v-list-item
      v-for="item in data"
      :key="item.eal_name"
      :to="item.eal_url"
      link
    >
      <v-list-item-icon>
        <v-icon>{{ item.eal_icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ item.eal_name }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Navigation",
  mounted() {
    this.GetData({ url: "Menus", opt: "PushData" });
  },
  methods: {
    ...mapActions(["GetData"])
  },
  computed: {
    ...mapState(["data"])
  }
};
</script>
