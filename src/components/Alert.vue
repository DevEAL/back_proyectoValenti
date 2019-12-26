<template>
  <div>
    <v-alert
      :type="alert.color"
      :value="close"
      prominent
      transition="scale-transition"
    >
      <v-row align="center">
        <v-col class="grow">
          {{ alert.text }}
        </v-col>
        <v-col class="shrink">
          <v-icon @click="open">fa-times</v-icon>
        </v-col>
      </v-row>
    </v-alert>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Alert",
  props: {
    alert: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {
        color: "success",
        icon: "fa-exclamation-triangle",
        text: "Hello"
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
