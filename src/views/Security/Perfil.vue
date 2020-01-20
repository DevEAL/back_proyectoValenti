<template>
  <div>
    <Table :Header="title" :Data="data" Title="Perfil" />
    <v-dialog v-model="close" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Nuevo Registro</span>
          <v-spacer></v-spacer>
          <v-btn class="ml-auto" @click="cerrar()" text icon>
            <v-icon>fa-times</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="">
            <v-text-field
              outlined
              label="Nombre"
              name="Nombre"
              v-model="name"
              type="text"
            />
            <v-textarea
              outlined
              name="input-7-4"
              label="Detalle"
              v-model="detalle"
            ></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="ma-1" tile color="error" dark @click="cerrar()">
            Cancelar
          </v-btn>
          <v-btn class="ma-1" tile color="success" dark @click="enviar()">
            Enviar
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
        <Load />
      </v-card>
    </v-dialog>
    <Notify />
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "Perfil",
  data() {
    return {
      title: [
        {
          text: "Id",
          align: "left",
          sortable: false,
          value: "ideal_perfil"
        },
        { text: "Nombre", value: "eal_name", sortable: false },
        { text: "Detalle", value: "eal_detalle", sortable: false },
        { text: "Activo", value: "eal_active", sortable: false },
        { text: "", value: "action", sortable: false }
      ],
      name: "",
      detalle: ""
    };
  },
  mounted() {
    this.GetDataSecurity("Perfiles");
  },
  methods: {
    ...mapMutations(["open"]),
    ...mapActions("Security", ["GetDataSecurity"]),
    ...mapActions(["PostData"]),
    cerrar() {
      this.name = "";
      this.detalle = "";
      this.open();
    },
    enviar() {
      let data = {
        url: "Perfil",
        form: {
          name: this.name,
          detalle: this.detalle
        }
      };
      this.name = "";
      this.detalle = "";
      this.PostData(data);
    }
  },
  computed: {
    ...mapState(["close"]),
    ...mapState("Security", ["data"])
  }
};
</script>
