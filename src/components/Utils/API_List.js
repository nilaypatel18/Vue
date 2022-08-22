import axios from "axios";
//import VueAxios from "vue-axios";

export const getAllCountry = () => {
  return axios
    .get("https://restcountries.com/v2/all")
    .then((res) => {
      return res
    })
    .catch((error) => {
      return error;
    });
};
