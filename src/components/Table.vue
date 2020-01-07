<template>
  <v-data-table
    :headers="Header"
    :items="Data"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>{{ Title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="mx-2" tile dark small color="primary" @click="open()">
          <v-icon dark>fa-plus</v-icon>
        </v-btn>
      </v-toolbar>
    </template>
    <template v-slot:item.eal_active="{ item }">
      <v-switch v-model="item.eal_active"></v-switch>
    </template>
    <template v-slot:item.action="{ item }">
      <!-- <v-icon small class="mr-2">
        fa-pen
      </v-icon> -->
      <v-icon small>
        fa-trash
      </v-icon>
    </template>
  </v-data-table>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Table",
  props: {
    Title: {
      type: String,
      default: "Name Table"
    },
    Header: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {
        name: "success",
        value: "fa-exclamation-triangle"
      }
    },
    Data: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {
        name: "success",
        value: "fa-exclamation-triangle"
      }
    }
  },
  methods: {
    ...mapMutations(["open"])
  },
  computed: {
    ...mapState(["close"])
  }
};
</script>
