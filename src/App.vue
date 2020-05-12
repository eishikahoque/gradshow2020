<template>
  <div id="app">
    <!-- MAIN BODY -->
    <router-view />
    <div class="bg-gradient"></div>
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
  // #app {
  // background-image: url(/static/images/homeBackgrounds/head-bg.svg);
  // background-position: top;
  // background-size: 100%;
  // background-repeat: no-repeat;
  // } 
</style>
