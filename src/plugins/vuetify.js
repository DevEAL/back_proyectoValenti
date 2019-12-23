import Vue from "vue";
import Vuetify from "vuetify/lib";
import es from "vuetify/es5/locale/es";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa" // default - only for display purposes
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#01579B",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  },
  lang: {
    locales: { es },
    current: "es"
  }
});
