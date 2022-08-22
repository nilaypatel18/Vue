import { createApp } from "vue";
import App from "./App.vue";
import router from "./components/Section/routes";

const app = createApp(App);

app.use(router).mount("#app");

app.config.globalProperties.$function = {
  capitalizeFirstLetter(string) {
    if (string != "" && string != null && string != undefined) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
      return "";
    }
  },

  camelize(string) {
    if (string != "" && string != null && string != undefined) {
      var myString = string.split(" ");
      for (let i = 0; i < myString.length; i++) {
        myString[i] = this.capitalizeFirstLetter(myString[i]);
      }
      myString = myString.join(" ");
      return myString;
    } else {
      return "";
    }
  },
};
