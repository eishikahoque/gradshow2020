import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/css/swiper.css' 
Vue.use(VueAwesomeSwiper);

import "@/styles/main.scss";

// FOR SMOOTH SCROLL
// https://www.npmjs.com/package/vue-scrollto
const VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
