<template>
  <v-container fluid>
    <v-alert
      :type="dataAlert.type"
      :value="alert"
      max-width="300"
      prominent
      tile
      transition="scale-transition"
    >
      <v-row align="center">
        <v-col class="grow">
          {{ dataAlert.text }}
        </v-col>
        <v-col class="shrink">
          <v-btn
            class="ml-auto"
            @click="setAlertClose()"
            text
            icon
            color="white"
          >
            <v-icon>fa-times</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-alert>
  </v-container>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Alert",
  methods: {
    ...mapMutations(["setAlert", "setAlertClose"])
  },
  computed: {
    ...mapState(["alert", "dataAlert"])
  }
};
</script>
