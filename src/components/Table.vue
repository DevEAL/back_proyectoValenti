<template>
  <v-data-table
    :headers="Title"
    :items="Data"
    sort-by="calories"
    class="elevation-1"
  ></v-data-table>
</template>
<script>
export default {
  name: "Table",
  props: {
    Title: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {
        name: "success",
        value: "fa-exclamation-triangle"
      }
    },
    Data: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {
        name: "success",
        value: "fa-exclamation-triangle"
      }
    }
  }
};
</script>
