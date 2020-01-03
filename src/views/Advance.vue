<template>
  <div class="Advance">
    <Header></Header>
    <v-content>
      <v-container>
        <Table :Title="title" :Data="Data" />
      </v-container>
    </v-content>
    <v-content>
      <v-row align="center" justify="center" v-if="close">
        <Alert :alert="notification"></Alert>
      </v-row>
      <v-form>
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
              <p>Avances de obra</p>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
              <v-select
                outlined
                :items="Select"
                item-text="name"
                item-value="eal_idcategoria"
                v-model="form.idcategoria"
                label="Categoria"
              ></v-select>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
              <DateInput
                title="Fecha Inicio de Obra"
                :form="form"
                @fecha="form.dataInicio = $event"
              ></DateInput>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
              <InputFile
                @name="form.img = $event"
                @file="form.url = $event"
              ></InputFile>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
              <v-textarea
                outlined
                name="input-7-4"
                label="Descripcion"
                v-model="form.message"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
              <v-btn color="primary" @click="cargar()">Guardar</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-content>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import DateInput from "../components/DateInput.vue";
import InputFile from "../components/InputFile.vue";
import Table from "../components/Table.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "Advance",
  data() {
    return {
      form: {},
      title: [
        {
          text: "Id",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Imagen", value: "calories" },
        { text: "Fecha de Inicio Obras", value: "fat" },
        { text: "Mensaje", value: "carbs" },
        { text: "Categoria", value: "protein" },
        { text: "Activo", value: "action", sortable: false }
      ],
      Data: []
    };
  },
  components: {
    Header,
    DateInput,
    InputFile,
    Table
  },
  mounted() {
    this.GetData({ url: "Select/eal_categoria", opt: "PushSelect" });
  },
  methods: {
    ...mapActions(["GetData", "PostData"]),
    cargar() {
      this.PostData({ url: "Advance", form: this.form });
      this.form = {};
    }
  },
  computed: {
    ...mapState(["Select", "close", "notification"])
  }
};
</script>
