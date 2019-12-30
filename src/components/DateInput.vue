<template>
  <div>
    <v-col cols="12">
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            :label="title"
            prepend-icon="fa-calendar-alt"
            outlined
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="modal = flase">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(date)"
            >Ok</v-btn
          >
        </v-date-picker>
      </v-dialog>
    </v-col>
  </div>
</template>
<script>
export default {
  name: "DateInput",
  props: ["title"],
  data() {
    return {
      modal: false,
      date: ""
    };
  },
  watch: {
    date: function() {
      return this.$emit("fecha", this.date);
    }
  }
};
</script>
