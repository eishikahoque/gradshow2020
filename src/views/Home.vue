<template>
  <div class="container">
    <div class="row">
      <div id="home" class="col-12">
          <Hero />
      </div>
    </div>

  <div class="row">
      <div id="about" class="col-12">
          <About />
      </div>
    </div>

    <!-- STUDENT PROFILES -->
    <div class="row">
      <div id="grads" class="col-12">
        <!-- Put student profiles component here -->
          <h1 id="grads"> Grads </h1>
      </div>
    </div>

    <!-- FEATURED PROJECTS -->
    <div class="row">
      <div class="col-12">
        <!-- Put student projects component here -->
        <h1 id="projects"> Projects </h1>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <h1> Footer </h1>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import About from "../components/AboutUs.vue";

// @ is an alias to /src
export default {
  name: "Home",
  components: {
    Hero,
    About
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