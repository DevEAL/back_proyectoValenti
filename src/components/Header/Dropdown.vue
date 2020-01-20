<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn class="ma-2" tile outlined dark color="white" v-on="on">
          <v-icon left dark>fa-user</v-icon> {{ name }}
        </v-btn>
      </template>
      <v-list dense nav>
        <v-list-item @click="Logout(name)">
          <v-list-item-icon>
            <v-icon>fa-sign-out-alt</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            Logout
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Dropdown",
  props: {
    name: {
      type: String,
      default: "User"
    }
  },
  methods: {
    ...mapActions(["Logout"])
  }
};
</script>
