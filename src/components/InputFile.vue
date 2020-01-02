<template>
  <div>
    <v-text-field
      v-model="form.name"
      label="Seleccionar Imagen"
      prepend-icon="fa-camera"
      @click="open"
      outlined
      :disabled="status"
    ></v-text-field>
    <input
      type="file"
      style="display: none"
      ref="image"
      accept="image/*"
      @change="onFile"
    />
  </div>
</template>
<script>
export default {
  name: "InputFile",
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
          // eslint-disable-next-line no-console
          console.log(this.form);
          this.status = true;
          this.$emit("file", this.form);
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
