import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Padmini from "../views/Padmini.vue";

import ComingSoon from "../views/ComingSoon.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ComingSoon",
    component: ComingSoon
  },
  {
    path: "/padmini",
    name: "Padmini",
    component: Padmini
  },
  {
    path: "/home",
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
