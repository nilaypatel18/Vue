<template>
  <div class="page-wrapper">
    <HeaderSection v-bind:user="user" v-bind:isLogin="isLogin" />
    <div class="container router_viewpagesection">
      <router-view />
    </div>
    <FooterSeaction />
  </div>
</template>

<script>
import HeaderSection from "./HeaderSection.vue";
import FooterSeaction from "./FooterSection.vue";
import router from "../Section/routes";
export default {
  name: "PageLayout",
  components: {
    HeaderSection,
    FooterSeaction,
  },
  data() {
    return {
      user: "",
      isLogin: false,
    };
  },
  methods: {
    initVerf(to) {
      var userData = localStorage.getItem("user_info");
      if (!userData) {
        if (
          to.path != "/about" &&
          to.path != "/career" &&
          to.path != "/signup" &&
          to.path != "/signin"
        ) {
          router.push({ path: "/signin" });
        }
      } else {
        if (to.path == "/signup" || to.path == "/signin") {
          router.push({ path: "/home" });
        }
        this.user = JSON.parse(userData);
        this.isLogin = true;
      }
    },
  },
  watch: {
    $route(to) {
      this.initVerf(to);
    },
  },
};
</script>
