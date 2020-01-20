<template>
  <v-snackbar
    v-model="notificationState"
    right
    bottom
    timeout="6000"
    :color="notification.type"
  >
    {{ notification.text }}
    <v-btn
      class="ml-auto"
      @click="setNotificationClose()"
      text
      icon
      color="white"
    >
      <v-icon>fa-times</v-icon>
    </v-btn>
  </v-snackbar>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Notification",
  methods: {
    ...mapMutations(["setNotificationClose"])
  },
  computed: {
    ...mapState(["notificationState", "notification"])
  }
};
</script>
