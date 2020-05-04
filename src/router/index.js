import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import ComingSoon from "../views/ComingSoon.vue";
Vue.use(VueRouter);

<<<<<<< Updated upstream
function load(componentName) {
  return () => import(`@/components/${componentName}.vue`);
=======
// eslint-disable-next-line prettier/prettier

function load(componentName) {
  return () => import(`@/views/${componentName}.vue`);
>>>>>>> Stashed changes
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
    component: load("Home")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
