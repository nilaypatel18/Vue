<template>
  <CNavbar expand="lg">
    <CContainer fluid>
      <CNavbarBrand href="#" class="vue_demo_brandImage"
        ><img
          alt="Vivid logo"
          src="https://cdn-bjpkm.nitrocdn.com/hdhcvTJJfHbrIccvCbHrpequrJMTTfEK/assets/static/optimized/rev-ce4d505/wp-content/themes/vivid-web-solutions/assets/vivid/img/core-img/logo-invert.svg"
      /></CNavbarBrand>
      <CNavbarToggler
        aria-label="Toggle navigation"
        aria-expanded="{visible}"
        @click="visible = !visible"
      />
      <CCollapse
        v-if="isLogin"
        class="navbar-collapse justify-content-end"
        :visible="visible"
      >
        <CNavbarNav class="me-auto mb-2 mb-lg-0">
          <CNavItem>
            <CNavLink href="#" active
              ><router-link to="/home">Home</router-link>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="/about">About</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="/career">Career</CNavLink>
          </CNavItem>
          <div class="dropdown">
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
            >
              <div class="headerprofile_info">
                {{ capitalizeFirstLetter(user.finame[0]) }}
              </div>
            </button>
            <ul class="dropdown-menu">
              <li>{{ user.finame }} {{ user.liname }}</li>
              <li class="divider"></li>
              <li v-on:click="logout">Logout</li>
            </ul>
          </div>
        </CNavbarNav>
      </CCollapse>
      <CCollapse
        v-else
        class="navbar-collapse justify-content-end"
        :visible="visible"
      >
        <CNavbarNav class="me-auto mb-2 mb-lg-0">
          <CNavItem>
            <CNavLink href="/about">About</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="/career">Career</CNavLink>
          </CNavItem>
        </CNavbarNav>
      </CCollapse>
    </CContainer>
  </CNavbar>
</template>

<script>
import {
  CNavbar,
  CContainer,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
} from "@coreui/vue";
export default {
  name: "HeaderSection",
  components: {
    CNavbar,
    CContainer,
    CNavbarToggler,
    CCollapse,
    CNavbarNav,
    CNavItem,
    CNavLink,
  },
  data() {
    return {
      visible: false,
    };
  },
  mounted() {},
  methods: {
    capitalizeFirstLetter(string) {
      if (string != "" && string != null && string != undefined) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      } else {
        return "";
      }
    },
    logout() {
      localStorage.removeItem("user_info");
    },
  },
  props: ["user", "isLogin"],
};
</script>
