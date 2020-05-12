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
.bg-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #cfbdf3, #e7b8f0, #f6fbfe);
  z-index: -6;
}
</style>
