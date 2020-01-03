<template>
  <div class="New">
    <Header></Header>
    <v-content>
      <v-container>
        <Table :Title="title" :Data="Data" />
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Table from "../components/Table.vue";
export default {
  name: "New",
  components: {
    Header,
    Table
  },
  data() {
    return {
      title: [
        {
          text: "Id",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Titulo", sortable: false, value: "calories" },
        { text: "Imagen", value: "calories" },
        { text: "Fecha de publicación", value: "fat" },
        { text: "Detalle", value: "carbs" },
        { text: "Enlace", value: "protein" },
        { text: "Activo", value: "action", sortable: false }
      ],
      Data: []
    };
  }
};
</script>
