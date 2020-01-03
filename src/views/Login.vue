<template>
  <div id="app">
    <v-container fluid>
      <v-row align="center" justify="center" v-if="close">
        <Alert :alert="notification"></Alert>
      </v-row>
      <v-row>
        <v-col clos="12">
          <v-row align="center" justify="center" class="pa-sm-12 xs-xl-auto">
            <v-card
              class="elevation-12 pt-6 pa-sm-12 xs-xl-auto"
              align="center"
              justify="center"
              max-width="400"
            >
              <v-row align="center" justify="center">
                <v-col cols="12" sm="12" md="12" xl="12">
                  <v-img
                    class="mb-6"
                    src="../assets/logo.png"
                    contain
                    max-width="120"
                  ></v-img>
                </v-col>
                <v-col cols="12" sm="12" md="12" xl="12">
                  <p class="font-weight-black display-1">
                    Login
                  </p>
                </v-col>
                <v-col cols="12" sm="12" md="12" xl="12">
                  <v-text-field
                    label="Login"
                    name="login"
                    v-model="form.user"
                    :rules="[rules.required]"
                    prepend-icon="fa-user"
                    type="text"
                  />
                </v-col>
                <v-col cols="12" sm="12" md="12" xl="12">
                  <v-text-field
                    v-model="form.password"
                    prepend-icon="fa-lock"
                    :append-icon="show1 ? 'fa-eye' : 'fa-eye-slash'"
                    :rules="[rules.required]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Contraseña"
                    hint="At least 8 characters"
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12" xl="12">
                  <v-btn block color="primary" dark @click="login()">
                    Login
                  </v-btn>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  xl="12"
                  class="font-italic overline"
                >
                  &copy; {{ new Date().getFullYear() }} POWER BY EN ALGÚN LUGAR
                </v-col>
              </v-row>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Alert from "../components/Alert";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Login",
  components: {
    Alert
  },
  data() {
    return {
      show1: false,
      form: {
        user: "",
        password: ""
      },
      rules: {
        required: value => !!value || "Required."
      }
    };
  },
  methods: {
    ...mapMutations(["open", "setNotification"]),
    login() {
      if (this.form.user == "" || this.form.password == "") {
        this.open();
        let response = {
          color: "warning",
          icon: "fa-exclamation-triangle",
          text: "Hay Campos Vacios"
        };
        this.setNotification(response);
      } else {
        fetch(this.$Api.path + "Login", {
          method: "POST",
          body: JSON.stringify(this.form),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(res => res.json())
          .then(data => {
            let status = data.statusCode;
            switch (status) {
              case 200:
                // eslint-disable-next-line no-case-declarations
                let response = data.data.data[0];

                for (let item in response) {
                  sessionStorage.setItem(item, response[item]);
                }
                this.form = {
                  user: "",
                  password: ""
                };
                this.$router.push("/Home");
                break;
              case 210:
                this.open();
                // eslint-disable-next-line no-case-declarations
                let responseUn = {
                  color: "warning",
                  icon: "fa-exclamation-triangle",
                  text: "Datos Erroneos"
                };
                this.setNotification(responseUn);
                this.form = {
                  user: "",
                  password: ""
                };
                break;
            }
          });
      }
    }
  },
  computed: {
    ...mapState(["close", "notification"])
  }
};
</script>

<style>
.logoEal {
  width: 200px;
}
</style>
