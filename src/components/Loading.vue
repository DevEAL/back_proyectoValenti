<template>
  <div class="text-center">
    <v-overlay :value="Loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["Loading"])
  }
};
</script>
