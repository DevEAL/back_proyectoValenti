<template>
  <div>
    <v-navigation-drawer permanent>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "Navigation",
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "fa-tachometer-alt" },
        { title: "Configuración", icon: "fa-cogs" },
        { title: "Seguridad", icon: "fa-shield-alt" }
      ]
    };
  }
};
</script>
