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
          <button v-scroll-to="'#aboutSec'">
            About
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
    <!-- HERO SECTION -->
    <section class="container">
      <div class="row justify-content-center">
        <div class="col-10">
          <h1 id="introSec"> Meet </h1>
          <h1> Your Sheridan </h1>
          <img
            class="coming-soon-header"
            :src="require(`../assets/images/${images.imm2020Grads}`)"
            alt="IMM2020 Grads"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3> see what they can do for you </h3>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="container">
      <div class="row">
        <div class="col-12">
          <h2 id="aboutSec"> About Us </h2>
        </div>
      </div>
      <div class="row justify-content-md-end justify-content-sm-center">
        <div class="col-11">
          <p> The times might be uncertain, but our potential is iridescently bright. We are the 
            upcoming designers, developers, and most importantly, problem solvers, who are excited 
            to tackle the next challenge. If you are curious about what more the graduates can do 
            for you, don’t be afraid to start a conversation. Take your time and flow through the 
            web showcase of projects from design to development. </p>
        </div>
      </div>
    </section>

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
// @ is an alias to /src
export default {
  name: "Home",
  data: function(){
    return {
      images: {
        imm2020Grads: "imm2020-grads.svg"
      },
      error: null,
      success: false,
      loading: true
    };
  },
  methods: {
    onSuccess(){
      console.log("Successful");
    },
    onError(){
      console.log("Error")
    }
  }
};
</script>

<style scoped>
/* REMOVE THIS ONCE YOU PLACE YOUR COMPONENTS */
/* h1 {
  min-height: 900px;
} */
/* ========================================== */
</style>
