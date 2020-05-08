<template>
  <div class="blob-bg">

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
    <section id="introSec" class="d-flex align-items-center">
      <Hero />
    </section>

    <!-- ABOUT -->
    <section id="aboutSec" class="d-flex align-items-center">
      <AboutUs />
    </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";

export default {
  name: "Home",
	components: {
		Hero,
		AboutUs,
	},
  data: function(){
    return {
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
section {
  min-height: 600px;
}

.blob-bg {
  background-image: url(../assets/images/head-bg.svg);
  background-position: top;
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>
