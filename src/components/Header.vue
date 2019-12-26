<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list dense nav>
        <v-list-item
          v-for="item in itemsnav"
          :key="item.title"
          link
          :to="items.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
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
            <v-icon left dark>fa-user</v-icon> name
          </v-btn>
        </template>
        <v-list dense nav>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            @click="option(item.title)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      title: "Proyecto Valenti",
      drawer: null,
      items: [
        { title: "Ver Perfil", icon: "fa-user", function: "VerPerfil" },
        { title: "Logout", icon: "fa-sign-out-alt", function: "Logout" }
      ],
      itemsnav: [
        { title: "Dashboard", icon: "fa-tachometer-alt", to: "/Home" },
        { title: "Configuración", icon: "fa-cogs", to: "/Settings" },
        { title: "Seguridad", icon: "fa-shield-alt", to: "/Security" }
      ]
    };
  },
  methods: {
    option(action) {
      if (action == "Logout") {
        this.Logout();
      } else {
        // eslint-disable-next-line no-console
        console.log("Ver Perfil");
      }
    },
    Logout() {
      this.$router.push("/");
    }
  }
};
</script>
