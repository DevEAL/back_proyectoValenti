<template>
  <div class="Advance">
    <Header></Header>
    <v-content>
      <v-form>
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
              <p>Avances de obra</p>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
              <v-select outlined :items="Select" label="Categoria"></v-select>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
              <v-text-field
                outlined
                label="Fecha de Comienzo Avance"
              ></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
              <v-file-input label="Subir Imagen ..." outlined></v-file-input>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
              <v-textarea
                outlined
                name="input-7-4"
                label="Descripcion"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
              <v-btn color="primary">Guardar</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-content>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "Advance",
  components: {
    Header
  },
  mounted() {
    this.GetData({ url: "Select/eal_categoria", opt: "PushSelect" });
  },
  methods: {
    ...mapActions(["GetData"])
  },
  computed: {
    ...mapState(["Select"])
  }
};
</script>
