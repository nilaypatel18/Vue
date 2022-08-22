<template>
  <div class="register_container">
    <div>
      <h5>First Name</h5>
      <input
        type="text"
        name="firstname"
        placeholder="Enter your first name"
        v-model="data.firstname"
        v-on:input="handleInputChange($event)"
      />
      <p class="text-danger">{{ validation.firstname }}</p>
    </div>
    <div>
      <h5>Last Name</h5>
      <input
        type="text"
        name="lastname"
        placeholder="Enter your last name"
        v-model="data.lastname"
        v-on:input="handleInputChange($event)"
      />
      <p class="text-danger">{{ validation.lastname }}</p>
    </div>
    <div>
      <h5>Country</h5>
      <select
        @change="handleInputChange($event)"
        name="country"
        v-model="data.country"
      >
        <option value="">Select Country</option>
        <option
          v-for="countries in countries"
          v-bind:key="countries.alpha2Code"
          v-bind:value="countries.name"
        >
          {{ countries.name }}
        </option>
      </select>
      <p class="text-danger">{{ validation.country }}</p>
    </div>
    <div>
      <h5>Password</h5>
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        v-model="data.password"
        v-on:input="handleInputChange($event)"
      />
      <p class="text-danger">{{ validation.password }}</p>
    </div>

    <button v-on:click="fun_register">Sign Up</button>
  </div>
</template>

<script>
import { getAllCountry } from "../Utils/API_List";
import router from "../Section/routes";
export default {
  name: "SignUp",
  data() {
    return {
      data: {
        firstname: "",
        lastname: "",
        password: "",
        country: "",
      },
      isSubmit: false,
      isLoding: false,
      countries: [],
      validation: {
        firstname: "",
        lastname: "",
        password: "",
        country: "",
      },
    };
  },
  methods: {
    fun_register() {
      this.isSubmit = true;
      var error = false;

      if (this.data.firstname == "") {
        error = true;
        this.validation.firstname = "Please enter first name";
      } else {
        this.validation.firstname = "";
      }

      if (this.data.lastname == "") {
        error = true;
        this.validation.lastname = "Please enter last name";
      } else {
        this.validation.lastname = "";
      }

      if (this.data.lastname == "") {
        error = true;
        this.validation.password = "Please enter password";
      } else {
        this.validation.password = "";
      }

      if (!error) {
        this.isLoding = true;
        var finame = this.data.firstname;
        var liname = this.data.lastname;
        var countty = this.data.country;

        var user = {
          finame: this.data.firstname,
          liname: this.data.lastname,
          countty: this.data.country,
        };
        localStorage.setItem("user_info", JSON.stringify(user));
        setTimeout(function () {
          router.push({
            name: "home",
            params: {
              firstname: finame,
              lastname: liname,
              country: countty,
            },
          });
          this.isLoding = false;
        }, 1000);
      }
    },

    handleInputChange(e) {
      var name = e.target.name;
      var value = e.target.value;

      if (this.isSubmit) {
        if (name == "username") {
          if (value == "") {
            this.validation.firstname = "Please enter first name";
          } else {
            this.validation.firstname = "";
          }
        }
        

        if (name == "password") {
          if (value == "") {
            this.validation.password = "Please enter password";
          } else {
            this.validation.password = "";
          }
        }
      }
    },
  },
  mounted() {
    getAllCountry().then((res) => {
      this.countries = res.data;
    });
  },
};
</script>
