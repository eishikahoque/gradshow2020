<template>
  <div id="app">
    <!-- MAIN BODY -->
    <Navigation />
    <router-view />
  </div>
</template>

<script>
<<<<<<< Updated upstream
import Navigation from "./views/navigation";
=======
// eslint-disable-next-line prettier/prettier
import Navigation from './views/navigation'
>>>>>>> Stashed changes
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
