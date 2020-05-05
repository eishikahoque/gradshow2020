<template>
  <div class="container">
    <!-- ======= NAVIGATION -->
    <div class="row">
      <div class="col-12">
        <!-- Put navigation component here -->
        <!-- <p>
          Navigation
          <button v-scroll-to="'#about'">
            About
          </button>
          <button v-scroll-to="'#grads'">
            Grads
          </button>
          <button v-scroll-to="'#projects'">
            Projects
          </button>
          <button v-scroll-to="'#location'">
            Location
          </button>
        </p> -->
      </div>
    </div>

    <!-- ======== MAIN BODY -->
    <!-- INTRO -->

    <div class="row">
      <div class="col-12">
        <!-- Put intro component here -->
        <!-- <h1 id="about">I'm about section</h1>-->
        <about></about>
      </div>
    </div>

    <!-- STUDENT PROFILES -->
    <div class="row">
      <div class="col-12">
        <!-- Put student profiles component here -->
        <!-- REMOVE BELOW H1 WHEN YOU PLACE YOUR COMPONENTS -->

        <!-- <h1 id="grads">I'm grads section</h1> -->
        <grads></grads>
      </div>
    </div>

    <!-- FEATURED PROJECTS -->
    <div class="row">
      <div class="col-12">
        <!-- Put student projects component here -->
        <!-- REMOVE BELOW H1 WHEN YOU PLACE YOUR COMPONENTS -->
        <!-- <h1 id="projects">I'm projects section</h1> -->
        <projects></projects>
      </div>
    </div>

    <!-- Location -->
    <div class="row">
      <div class="col-12">
        <!-- Put student projects component here -->
        <!-- REMOVE BELOW H1 WHEN YOU PLACE YOUR COMPONENTS -->
        <!-- <h1 id="location">I'm location section</h1> -->
        <location></location>
      </div>
    </div>
  </div>
</template>

<script>
import About from "./about";
import Grads from "./grads";
import Projects from "./projects";
import Location from "./location";

export default {
  name: "Home",
  components: {
    About,
    Grads,
    Projects,
    Location
  }
};
</script>

<style scoped>
/* REMOVE THIS ONCE YOU PLACE YOUR COMPONENTS */
h1 {
  min-height: 600px;
}
/* ========================================== */
</style>
