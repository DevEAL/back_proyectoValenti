<template>
  <div class="Advance">
    <Head></Head>
    <v-content>
      <v-container>
        <Table :Header="title" :Data="data" Title="Avances de Obras" />
      </v-container>
    </v-content>
    <v-content>
      <v-dialog v-model="close" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Nuevo Registro</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row align="center" justify="center">
                <v-col cols="12">
                  <v-select
                    outlined
                    :items="Select"
                    item-text="name"
                    item-value="eal_idcategoria"
                    v-model="form.idcategoria"
                    label="Categoria"
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <DateInput
                    title="Fecha Inicio de Obra"
                    :form="form"
                    @fecha="form.dataInicio = $event"
                  ></DateInput>
                </v-col>
                <v-col cols="12">
                  <InputFile
                    accept="image/*"
                    icon="fa-camera"
                    title="Seleccionar Imagen"
                    @name="form.img = $event"
                    @file="form.url = $event"
                  ></InputFile>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    outlined
                    name="input-7-4"
                    label="Descripcion"
                    v-model="form.message"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="ma-2" tile color="error" dark @click="cerrar()">
              Cancelar
            </v-btn>
            <v-btn class="ma-2" tile color="success" dark @click="cargar()">
              Enviar
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-content>
  </div>
</template>
<script>
import DateInput from "../components/DateInput.vue";
import InputFile from "../components/InputFile.vue";
import Table from "../components/Table.vue";
import { mapState, mapActions, mapMutations } from "vuex";
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
          value: "ideal_contenido"
        },
        { text: "Imagen", value: "eal_img" },
        { text: "Fecha de Inicio Obras", value: "eal_dataInicio" },
        { text: "Mensaje", value: "eal_message" },
        { text: "Categoria", value: "eal_name" },
        { text: "Activo", value: "eal_active", sortable: false },
        { text: "", value: "action", sortable: false }
      ]
    };
  },
  components: {
    DateInput,
    InputFile,
    Table
  },
  mounted() {
    this.GetDataAdvance("Advances");
    this.GetData({ url: "Select/eal_categoria", opt: "PushSelect" });
  },
  methods: {
    ...mapActions(["GetData", "PostData"]),
    ...mapActions("Advance", ["GetDataAdvance"]),
    ...mapMutations(["open"]),
    cerrar() {
      this.form = {};
      this.open();
    },
    cargar() {
      this.PostData({ url: "Advance", form: this.form });
      this.form = {};
      this.open();
      this.GetDataAdvance("Advances");
    }
  },
  computed: {
    ...mapState(["Select", "close", "notification"]),
    ...mapState("Advance", ["data"])
  }
};
</script>
