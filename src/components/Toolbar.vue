<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-for="item in items" :key="item.title" text :to="item.to">{{
          item.title
        }}</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
    <router-view name="helper" />
  </div>
</template>
<script>
export default {
  name: "Toolbar",
  props: {
    title: {
      type: String,
      default: "Toolbar"
    },
    items: {
      type: [Object, Array]
    }
  }
};
</script>
