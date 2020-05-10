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
      <div class="project-card__details">
        <h4 class="project-card__details-title">
          {{ project.name }} 
        </h4>
        <div class="project-card__details-authors">
          <p class="project-card__content">By: {{ project.students }} </p>
        </div>
        <div class="project-card__details-description">
          <p class="project-card__content"> {{ project.description }} </p>
        </div>
        <div class="project-card__links">
          <a v-bind:href="project.link" target="_blank"> 
              View Project 
              <img class="link-img" src="/static/images/Icons/arrow-right.svg"/>
          </a>
          <!-- <template v-for="(icon, i) in projectIcons">
            <img
              :key="i"
              v-if="project[icon.name]"
              v-bind:src="`/static/images/socialIcons/${icon.image}`"
              alt="project icon"
              class="projectIcon"
              @click="viewProject(project[icon.name])"
            />
          </template> -->
        </div>
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
  
  // data() {
  //   return {
  //     projectIcons: [
  //       {
  //         name: "info",
  //         image: "info.svg"
  //       },
  //       {
  //         name: "link",
  //         image: "link.svg"
  //       },
  //       {
  //         name: "media",
  //         image: "media.svg"
  //       },
  //     ],
  //   };
  // },
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
  display: flex;

  &__image {
    width: 100%;
    height:350px;
    margin-bottom: 2rem;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;

  }

  &__details {
    height: 100%;
    display: flex;
    flex-direction: column;

    &-title {
    @include text-h4();
    display: flex;
    margin-bottom: 2rem;
    color: $color-black;
    }

    &-authors {
      font-weight: 900;
    }

    &-description {
      display: flex;
      flex-direction: column;
      margin-top: auto;
    }
  }

  &__content {
    @include text-body-md();
    // font-weight: 600;
    color: $color-black;
    margin-bottom: 1rem;

    @include media-breakpoint-down(md) {
        font-size: 16px;
    }
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

@include media-breakpoint-up(sm) {
  .project-card {
    width: 100%;
  }
}

</style>
