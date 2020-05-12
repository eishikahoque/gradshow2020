<template>
  <div class="container">
    <Navigation />
    <BlobAnimation />
    <div class="row align-items-center mainSection">
      <div id="home" class="col-12">
          <Hero />
      </div>
    </div>

    <div class="row align-items-center">
      <div id="about" class="col-12">
        <About />
      </div>
    </div>

    <!-- STUDENT PROFILES -->
    <div class="row align-items-center">
      <div id="grads" class="col-12">
        <!-- Put student profiles component here -->
        <!-- REMOVE BELOW H1 WHEN YOU PLACE YOUR COMPONENTS -->

        <!-- <h1 id="grads">I'm grads section</h1> -->
        <Profiles />
      </div>
    </div>

    <!-- FEATURED PROJECTS -->
    <div class="row align-items-center">
      <div id="projects" class="col-12">
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
import Hero from "../components/Hero.vue";
import About from "../components/AboutUs.vue";
import Profiles from "../components/Profiles.vue";
import BlobAnimation from "../components/BlobAnimation.vue";
import Footer from "../components/Footer.vue";

// @ is an alias to /src
import ProjectCard from "../components/ProjectCard";
import {data} from "@/locale/components/projectCard.js";

export default {
  name: "Home",
  components: {
    Hero,
    About,
    Profiles,
    BlobAnimation,
    Navigation,
    Footer
  }
};
</script>

<style scoped>
.mainSection{
  height: 100vh;
}

#about, #grads, #projects{
  margin-top: 10em;
  margin-bottom: 10em;
}
/* REMOVE THIS ONCE YOU PLACE YOUR COMPONENTS */
h1 {
  min-height: 900px;
}
/* ========================================== */
</style>