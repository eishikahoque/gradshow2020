<template>
  <div id="app">
    <!-- MAIN BODY -->
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
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

<style lang="scss"></style>
