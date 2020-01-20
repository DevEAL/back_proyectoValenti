<template>
  <v-container>
    <v-row align="center" justify="center">
      <Alert align="center" justify="center" />
      <v-card
        class="elevation-12 pt-6 pa-sm-2 xs-xl-auto"
        align="center"
        justify="center"
        max-width="400"
      >
        <v-img class="mb-6 ma-2" :src="img" contain max-width="120"></v-img>
        <h2 class="text-center">Login</h2>
        <v-card-text>
          <v-form @submit.prevent="setLogin()">
            <v-text-field
              label="Login"
              name="login"
              v-model="user"
              :rules="[rules.required]"
              prepend-icon="fas fa-user"
              type="text"
            />
            <v-text-field
              v-model="password"
              prepend-icon="fa-lock"
              :append-icon="show1 ? 'fa-eye' : 'fa-eye-slash'"
              :rules="[rules.required]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Contraseña"
              hint="At least 8 characters"
              @click:append="show1 = !show1"
            ></v-text-field>
            <v-btn block tile color="primary" dark type="submit">
              Login
            </v-btn>
          </v-form>
        </v-card-text>
        <p class="font-italic overline">
          &copy; {{ new Date().getFullYear() }} POWER BY EN ALGÚN LUGAR
        </p>
      </v-card>
    </v-row>
    <Load />
  </v-container>
</template>

<script>
import Alert from "../components/Alert";
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {
    Alert
  },
  data() {
    return {
      show1: false,
      user: "",
      password: "",
      rules: {
        required: value => !!value || "Required."
      },
      img: require("@/assets/logo.png")
    };
  },
  methods: {
    ...mapActions(["Login"]),
    setLogin() {
      let datos = {
        user: this.user,
        password: this.password
      };
      this.user = "";
      this.password = "";
      this.Login(datos);
    }
  }
  //   methods: {
  //     ...mapMutations(["open", "setNotification"]),
  //     login() {
  //       if (this.form.user == "" || this.form.password == "") {
  //         this.open();
  //         let response = {
  //           color: "warning",
  //           icon: "fa-exclamation-triangle",
  //           text: "Hay Campos Vacios"
  //         };
  //         this.setNotification(response);
  //       } else {
  //         fetch(this.$Api.path + "Login", {
  //           method: "POST",
  //           body: JSON.stringify(this.form),
  //           headers: {
  //             "Content-Type": "application/json"
  //           }
  //         })
  //           .then(res => res.json())
  //           .then(data => {
  //             let status = data.statusCode;
  //             switch (status) {
  //               case 200:
  //                 // eslint-disable-next-line no-case-declarations
  //                 let response = data.data.data[0];

  //                 for (let item in response) {
  //                   sessionStorage.setItem(item, response[item]);
  //                 }
  //                 this.form = {
  //                   user: "",
  //                   password: ""
  //                 };
  //                 this.$router.push("/Home");
  //                 break;
  //               case 210:
  //                 this.open();
  //                 // eslint-disable-next-line no-case-declarations
  //                 let responseUn = {
  //                   color: "warning",
  //                   icon: "fa-exclamation-triangle",
  //                   text: "Datos Erroneos"
  //                 };
  //                 this.setNotification(responseUn);
  //                 this.form = {
  //                   user: "",
  //                   password: ""
  //                 };
  //                 break;
  //             }
  //           });
  //       }
  //     }
  //   },
  //   computed: {
  //     ...mapState(["close", "notification"])
  //   }
};
</script>
