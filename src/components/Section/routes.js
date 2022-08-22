import { createWebHistory, createRouter } from "vue-router";
import SignUp from "../Pages/SignUp.vue";
import SampleExp from "../SampleCom/SampleExp.vue";
import PageNotFound from "./PageNotFound.vue";
import Home from "../Pages/Home.vue";
import AboutInfo from "../Pages/About.vue";
import CareerInfo from "../Pages/Career.vue";

const routes = [
  { path: "/signup", component: SignUp },
  { path: "/samplecomponant", component: SampleExp },
  { path: "/home", name: "home", component: Home },
  { path: "/about", name: "about", component: AboutInfo },
  { path: "/carrer", name: "carrer", component: CareerInfo },
  {
    path: "/:catchAll(.*)",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
