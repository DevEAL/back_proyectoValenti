<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
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
    </v-navigation-drawer>
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn class="ma-2" tile outlined dark color="white" v-on="on">
            <v-icon left dark>fa-user</v-icon> {{ name }}
          </v-btn>
        </template>
        <v-list dense nav>
          <v-list-item @click="Logout()">
            <v-list-item-icon>
              <v-icon>fa-sign-out-alt</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Logout
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content>
      <router-view name="helper"></router-view>
    </v-content>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      name: sessionStorage.eal_name,
      title: "Proyecto Valenti",
      drawer: false
    };
  },
  mounted() {
    this.GetData({ url: "Menus", opt: "PushData" });
  },
  computed: {
    ...mapState(["data"])
  },
  methods: {
    ...mapActions(["GetData"]),
    Logout() {
      fetch(this.$Api.path + "Logout", {
        method: "POST",
        body: JSON.stringify({ name: sessionStorage.eal_name }),
        headers: {
          authorization: sessionStorage.token,
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        // eslint-disable-next-line no-unused-vars
        .then(data => {
          let status = data.statusCode;

          if (status == "200") {
            sessionStorage.clear();
            this.$router.push("/");
          }
        });
    }
  }
};
</script>
