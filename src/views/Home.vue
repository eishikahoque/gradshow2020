<template>
  <div class="container">
    <!-- ======= NAVIGATION -->
    <div class="row">
      <div class="col-12">
        <!-- Put navigation component here -->
        <p>
          Navigation
          <button v-scroll-to="'#introSec'">
            Home
          </button>
          <button v-scroll-to="'#profileSec'">
            Profiles
          </button>
          <button v-scroll-to="'#projectSec'">
            Projects
          </button>
        </p>
      </div>
    </div>

    <!-- ======== MAIN BODY -->
    <!-- INTRO -->
    <div class="row">
      <div class="col-12">
        <!-- Put intro component here -->
        <h1 id="introSec">Hi. I'm Intro</h1>
      </div>
    </div>

    <!-- STUDENT PROFILES -->
    <div class="row">
      <div class="col-12">
        <!-- Put student profiles component here -->
        <!-- REMOVE BELOW H1 WHEN YOU PLACE YOUR COMPONENTS -->
        <h1 id="profileSec">I'm Profile</h1>
      </div>
    </div>

    <!-- FEATURED PROJECTS -->
    <div class="row">
      <div class="col-12">
        <!-- Put student projects component here -->
        <!-- REMOVE BELOW H1 WHEN YOU PLACE YOUR COMPONENTS -->
        <h1 id="projectSec">I'm Projects</h1>
      </div>
    </div>
    <!--  -->
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
  min-height: 900px;
}
/* ========================================== */
</style>
