<template>
  <div class="New">
    <Header></Header>
    <v-content>
      <v-container>
        <Table :Header="title" :Data="data" Title="Boletines" />
        <v-dialog v-model="close" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">Nuevo Registro</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Titulo"
                      outlined
                      dense
                      v-model="form.titulo"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <InputFile
                      accept="image/*"
                      icon="fa-camera"
                      title="Seleccionar Imagen"
                      @name="form.poster = $event"
                      @file="form.urlimg = $event"
                    ></InputFile>
                  </v-col>
                  <v-col cols="12">
                    <InputFile
                      @name="form.articulo = $event"
                      @file="form.urlpdf = $event"
                    ></InputFile>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      outlined
                      name="input-7-4"
                      label="Descripcion"
                      v-model="form.texto"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="ma-2" tile color="error" dark @click="open()">
                Cancelar
              </v-btn>
              <v-btn class="ma-2" tile color="success" dark @click="cargar()">
                Enviar
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Table from "../components/Table.vue";
import InputFile from "../components/InputFile.vue";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "New",
  components: {
    Header,
    Table,
    InputFile
  },
  data() {
    return {
      title: [
        {
          text: "Id",
          align: "left",
          sortable: false,
          value: "ideal_boletin"
        },
        { text: "Titulo", sortable: false, value: "eal_titulo" },
        { text: "Imagen", value: "eal_poster" },
        { text: "Fecha de Creación", value: "eal_registre" },
        { text: "Detalle", value: "eal_texto" },
        { text: "Enlace", value: "eal_articulo" },
        { text: "Activo", value: "eal_active", sortable: false },
        { text: "", value: "action", sortable: false }
      ],
      form: {}
    };
  },
  mounted() {
    this.GetData("News");
  },
  methods: {
    ...mapActions(["PostData"]),
    ...mapActions("New", ["GetData"]),
    ...mapMutations(["open"]),
    cargar() {
      this.PostData({ url: "New", form: this.form });
      this.form = {};
      this.open();
      this.GetData("News");
    }
  },
  computed: {
    ...mapState("New", ["data"]),
    ...mapState(["close"])
  }
};
</script>
