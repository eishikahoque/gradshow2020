<template>
  <div id="app">
    <!-- MAIN BODY -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "GradShow",

  data: function() {
    return {};
  }
};
</script>

<style lang="scss">
  #app {
  background-image: url(./assets/images/head-bg.svg);
  background-position: top;
  background-size: 100%;
  background-repeat: no-repeat;
  } 
</style>