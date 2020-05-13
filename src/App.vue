<template>
  <div id="app">
    <!-- MAIN BODY -->
    <Navigation class="nav"/>
    <router-view />
    <div class="bg-gradient"></div>
    <!-- <div id="footer-bg"/> -->
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name: "GradShow",
  components: {
    Navigation
  },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss">
#app {
  background-image: url(/static/images/homeBackgrounds/bg-no-shadow.png);
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 100%;
}
// #footer-bg {
//   background-image: url(/static/images/homeBackgrounds/footer.svg);
//   background-position: bottom;
//   background-size: 100%;
//   background-repeat: no-repeat;
// }
</style>
