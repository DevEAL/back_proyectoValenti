<template>
  <div>
    <v-text-field
      v-model="form.name"
      :label="title"
      :prepend-inner-icon="icon"
      @click="open"
      outlined
      :disabled="status"
    ></v-text-field>
    <input
      type="file"
      style="display: none"
      ref="image"
      :accept="accept"
      @change="onFile"
    />
  </div>
</template>
<script>
export default {
  name: "InputFile",
  props: {
    accept: {
      type: String,
      default: ".doc,.docx,.pdf"
    },
    icon: {
      type: String,
      default: "fa-file-pdf"
    },
    title: {
      type: String,
      default: "Seleccionar Archivo"
    }
  },
  data() {
    return {
      form: {},
      status: false
    };
  },
  methods: {
    open() {
      this.$refs.image.click();
    },
    onFile(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.form.name = files[0].name;
        if (this.form.name.lastIndexOf(".") <= 0) {
          return;
        }
        const file = new FileReader();
        file.readAsDataURL(files[0]);
        file.addEventListener("load", () => {
          this.form.url = file.result;
          this.form.File = files[0];

          this.status = true;
          this.$emit("name", this.form.name);
          this.$emit("file", this.form.url);
        });
      } else {
        this.form = {};
      }
    }
  },
  watch: {
    form: function() {
      return this.$emit("file", this.form);
    }
  }
};
</script>
