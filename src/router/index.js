import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ComingSoon from "../views/ComingSoon.vue";
Vue.use(VueRouter);

function load(componentName) {
  return () => import(`@/components/${componentName}.vue`);
}

const routes = [
  // {
  //   path: "/",
  //   name: "ComingSoon",
  //   component: ComingSoon
  // },
  {
    path: "/",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
