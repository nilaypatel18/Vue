<template>
  <Layout />
</template>

<script>
import Layout from "./components/Section/PageLayout.vue";
import './assets/custom_style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
