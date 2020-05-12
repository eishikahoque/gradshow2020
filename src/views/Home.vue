<template>
  <div class="container">
    <section class="students">
      <h2 class="section-title">Students</h2>
      <!-- INSERT PROFILECARDS COMPONENT HERE -->
      <!-- PLACEHOLDER FOR NOW -->
      <div class="row">
        <div class="col-sm-6 col-md-4">Col 1</div>
        <div class="col-sm-6 col-md-4">Col 2</div>
        <div class="col-sm-6 col-md-4">Col 3</div>
        <div class="col-sm-6 col-md-4">Col 4</div>
      </div>
    </section>
    <Projects/>
  </div>
</template>

<script>
import Projects from "../components/Projects";
import ProjectCard from "../components/ProjectCard";

export default {
  name: "Home", 
  title: 'Auto slides per view / Carousel mode',
  components: {
    Projects
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
    margin-bottom: 6rem;
}

</style>