<template>
  <div id="app">
    <v-app id="inspire">
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <!-- <v-col cols="12" sm="8" md="12" align="center" justify="center">
              <v-img
                src="../assets/logo.png"
                contain
                class="lighten-2"
                max-width="120"
              ></v-img>
            </v-col> -->
            <v-col cols="12" sm="8" md="4">
              <v-card class="elevation-12 pt-6" align="center" justify="center">
                <v-img
                  class="mb-6"
                  src="../assets/logo.png"
                  contain
                  max-width="120"
                ></v-img>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="Login"
                      name="login"
                      prepend-icon="fa-user"
                      type="text"
                    />
                    <v-text-field
                      id="password"
                      label="Password"
                      name="password"
                      prepend-icon="fa-lock"
                      type="password"
                    />
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn color="primary">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Login"
  // data() {
  //   return {
  //     source: String
  //   };
  // }
};
</script>

<style>
.logoEal {
  width: 200px;
}
</style>
