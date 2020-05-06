<template> 
    <!-- <div class="filteringSection">
      <div class="buttonContainer">
        <button
          class="primary-btn"
          v-for="(filter, i) in projFilters"
          v-bind:class="{ active: i === selectedProjFilterIndex }"
          data-toggle="buttons"
          :key="i"
          @click="filterProjects(filter.value)"
        >
          {{ filter.label }}
        </button>
      </div>
    </div> -->
  <div class="project-card">
    <div class="project-card__wrapper">
      <img v-bind:src="project.image" class="project-card__image" alt="project image" />
      <div class="profile-card__details">
        <h4 class="profile-card__details-title">
          {{ project.name }} 
        </h4>
        <div class="profile-card__details-authors">
          <p class="project-card__content">By: {{ project.students }} </p>
        </div>
        <div class="profile-card__details-description">
          <p class="project-card__content"> {{ project.description }} </p>
          <div class="project-card__links">
            <template v-for="(icon, i) in projectIcons">
              <img
                :key="i"
                v-if="project[icon.name]"
                v-bind:src="`/static/images/socialIcons/${icon.image}`"
                alt="project icon"
                class="projectIcon"
                @click="viewProject(project[icon.name])"
              />
            </template>
          </div>
        </div>
<!-- 
        <a v-bind:href="project.link" target="_blank"> 
            View Project 
            <img class="link-img" src="/static/images/Icons/arrow-right.svg"/>
        </a> -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "projectCard",
  props: {
    project: Object
  },
  components: {
  },
  
  data() {
    return {
      projectIcons: [
        {
          name: "info",
          image: "info.svg"
        },
        {
          name: "link",
          image: "link.svg"
        },
        {
          name: "media",
          image: "media.svg"
        },
      ],
    };
  },
  methods: {
    viewProject: function(path) {
      window.open(path, "_blank");
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/variables";
@import "@/styles/mixins/typography";
@import "@/styles/mixins/buttons";
@import "@/styles/mixins/breakpoints";

.project-card {
  background-color: $color-white;
  width: 100%;
  // height: 650px;
  // box-shadow: 4px 4px 16px -5px #cecece;
  // counter-increment: project-card;

  &__image {
    width: 100%;
    margin-bottom: 2rem;
  }

  &__details-title {
    @include text-h4();
    margin-bottom: 2rem;
    color: $color-black;
  }

  &__wrapper {
    padding: 1.5rem;
  }

  &__content {
    @include text-body-md();
    font-weight: 600;
    color: $color-black;
    margin-bottom: 1rem;
  }
}

.projectIcon{
  cursor: pointer;
  width: 40px;
  height: 40px;

  &:not(:first-child) {
      margin: 1rem
  }

  &:hover{
    filter: invert(.5) sepia(2) saturate(5) hue-rotate(220deg);
  }
}

.link-img {
  margin-left: 0.5rem;
}

// @include media-breakpoint-up(sm) {
//   .project-card {
//     width: 100%;
//   }
// }

</style>
