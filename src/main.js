import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// MILLIGRAM CSS
import "./../node_modules/milligram/dist/milligram.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
