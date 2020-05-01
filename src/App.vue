<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/padmini">Padmini</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import "@/assets/css/gradshow.css";
export default {
  name: "GradShow",
  data: function() {
    return {};
  }
};
</script>

<style></style>
