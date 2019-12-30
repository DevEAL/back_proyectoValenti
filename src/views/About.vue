<template>
  <div class="about">
    <Header></Header>
    <DateInput title="Fecha Inicio de Obra" @fecha="date = $event"></DateInput>
    <h1>hello</h1>
    {{ date }}
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import DateInput from "../components/DateInput.vue";
export default {
  name: "About",
  components: {
    Header,
    DateInput
  },
  data() {
    return {
      date: ""
    };
  }
};
</script>
