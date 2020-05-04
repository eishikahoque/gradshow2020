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
      <div class="filteringSection">
        <div class="buttonContainer">
          <button
            class="filterBtn"
            v-for="(filter, i) in projFilters"
            v-bind:class="{ active: i === selectedProjFilterIndex }"
            data-toggle="buttons"
            :key="i"
            @click="filterProjects(filter.value)"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
      <div v-for="(project, i) in filteredProjData" :key="i">
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
  name: "Home",
  components: {
    ProjectCard
  },
  data() {
    return{
      projectData: data,
      filteredProjData: data,
      projFilters: [
        {
          label: "All",
          value: ""
        },
        {
          label:"Mobile/Web App",
          value: "app"
        },
        {
          label:"AR/VR Experience",
          value: "ar/vr"
        }
      ],
      selectedProjFilterIndex: 0
    };
  },
  methods: {
    filterProjects: function(selectedProjFilter){
      this.selectedProjFilterIndex = this.projFilters.indexOf(selectedProjFilter);
      this.filteredProjData = selectedProjFilter
        ? this.projectData.filter(
          item => item.keywords.indexOf(selectedProjFilter) !== -1
        )
        : this.projectData
    }
  }
};
</script>
