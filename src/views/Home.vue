<template>
  <div class="container">
<Navigation />
<div class="row">
      <div class="col-12">
        <!-- Put intro component here -->
        <h1 id="about">I'm about section</h1>
        <!-- <about></about> -->
      </div>
    </div>

    <!-- STUDENT PROFILES -->
    <div class="row">
      <div id="grads" class="col-12">
        <!-- Put student profiles component here -->
        <!-- REMOVE BELOW H1 WHEN YOU PLACE YOUR COMPONENTS -->

        <!-- <h1 id="grads">I'm grads section</h1> -->
        <Profiles />
      </div>
    </div>

    <!-- FEATURED PROJECTS -->
    <div class="row">
      <div class="col-12">
        <!-- Put student projects component here -->
        <!-- REMOVE BELOW H1 WHEN YOU PLACE YOUR COMPONENTS -->
        <h1 id="projects">I'm projects section</h1>
        <!-- <projects></projects> -->
      </div>
    </div>

    <!-- Location -->
    <div class="row">
      <div class="col-12">
        <!-- Put student projects component here -->
        <!-- REMOVE BELOW H1 WHEN YOU PLACE YOUR COMPONENTS -->
        <Footer />
        <!-- <location></location> -->
      </div>
    </div>
  </div>

</template>

<script>
import Navigation from "../components/Navigation.vue";
import Profiles from "../components/Profiles.vue";
import Footer from "../components/Footer.vue";

// @ is an alias to /src
export default {
  name: "Home",
  components: {
    Navigation,
    Profiles,
    Footer
  }
};
</script>

<style scoped>

/* REMOVE THIS ONCE YOU PLACE YOUR COMPONENTS */
h1 {
  min-height: 900px;
}
/* ========================================== */
</style>
