<template>
  <div class="container">
    <!-- <Navigation /> -->
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
    <div class="row">
      <div class="col-12">
        <Projects />
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
import Projects from "../components/Projects";
import ProjectCard from "../components/ProjectCard";
// import Navigation from "../components/Navigation.vue";
import Hero from "../components/Hero.vue";
import About from "../components/AboutUs.vue";
import Profiles from "../components/Profiles.vue";
import BlobAnimation from "../components/BlobAnimation.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home", 
  title: 'Auto slides per view / Carousel mode',
  components: {
    Projects,
    Hero,
    About,
    Profiles,
    BlobAnimation,
    // Navigation,
    Footer
  }
};
</script>

<style lang="scss">
@import "@/styles/variables";
@import "@/styles/mixins/typography";
@import "@/styles/mixins/buttons";
@import "@/styles/mixins/breakpoints";

.primary-btn {
  @include primary-btn()
}

.btn {
    margin: 0.75rem;
}

.section-title {
    margin-bottom: 4rem;

    @include media-breakpoint-down(sm) {
      text-align: center;
    }
}

.filterContainer {
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    &.blurContainer {
      filter: blur(5px);
      overflow: hidden;
    }

    &-btn {
      width: 63%;
      margin-left: auto;
    }
    
    @include media-breakpoint-down(sm) {
      &-btn {
        width: 100%;
      }
    }
}
.mainSection{
  height: 100vh;
}

// #about, #grads, #projects{
//   margin-top: 10em;
//   margin-bottom: 10em;
// }
// /* REMOVE THIS ONCE YOU PLACE YOUR COMPONENTS */
// h1 {
//   min-height: 900px;
// }
</style>
