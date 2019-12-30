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
              <v-select
                outlined
                :items="Select"
                v-model="form.Categoria"
                label="Categoria"
              ></v-select>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
              <DateInput
                title="Fecha Inicio de Obra"
                @fecha="form.date = $event"
              ></DateInput>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
              <v-file-input
                label="Subir Imagen ..."
                outlined
                prepend-icon="fa-camera"
                v-model="form.img"
              ></v-file-input>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
              <v-textarea
                outlined
                name="input-7-4"
                label="Descripcion"
                v-model="form.Descripcion"
              ></v-textarea>
              <input type="file" @change="previewFiles" multiple>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
              <v-btn color="primary" @click="cargar()">Guardar</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      {{ form }}
    </v-content>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import DateInput from "../components/DateInput.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "Advance",
  data() {
    return {
      form: {}
    };
  },
  components: {
    Header,
    DateInput
  },
  mounted() {
    this.GetData({ url: "Select/eal_categoria", opt: "PushSelect" });
  },
  methods: {
    ...mapActions(["GetData"]),
    previewFiles(event) {
      // eslint-disable-next-line no-console
      console.log(event.target.files[0]["tmp_name"]);
    },
    cargar() {
      // eslint-disable-next-line no-console
      console.log(this.form);
    }
  },
  computed: {
    ...mapState(["Select"])
  }
};
</script>
