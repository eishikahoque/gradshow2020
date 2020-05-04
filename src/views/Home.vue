<template>
  <div class="container">
    Home Page...
    <section class="students">
      <h2 class="section-title">Students</h2>
      <!-- INSERT PROFILECARDS COMPONENT HERE -->
      <!-- PLACEHOLDER FOR NOW -->
      <div class="row">
        <div class="col-sm-6 col-md-3">Col 1</div>
        <div class="col-sm-6 col-md-3">Col 2</div>
        <div class="col-sm-6 col-md-3">Col 3</div>
        <div class="col-sm-6 col-md-3">Col 4</div>
      </div>
    </section>
    <section class="projects">
      <h2 class="section-title">Featured Projects</h2>
      <div v-for="project in projects" :key="project.id">
        <ProjectCard
          v-bind:project="project"
        />
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectCard from "../components/ProjectCard";
import {data} from "@/locale/components/projectCard.js";

export default {
  components: {
    ProjectCard
  },
  data: () => ({
    projects: data
  }),
  name: "Home",

};
</script>
