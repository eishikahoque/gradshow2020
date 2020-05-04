<template> 
  <div class="project-card">
    <div>
      <img v-bind:src="project.image" class="project-card__image" alt="project image" />
    </div>
    <div class="profile-card__details">
      <h3 class="profile-card__details-title">
        {{ project.name }} 
      </h3>
      <div class="profile-card__details-authors">
        By: {{ project.students }} 
      </div>
      <div class="profile-card__details-description">
        <p> {{ project.description }} </p>
      </div>
      <a v-bind:href="project.link" target="_blank"> 
          View Project 
          <img class="link-img" src="/static/images/Icons/arrow-right.svg"/>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: "projectCard",
  props: {
    project: Object
  },
  components: {},
  data() {
    return {};
  },
  methods: {}

};
</script>

<style lang="scss">
@import "@/styles/variables";
@import "@/styles/mixins/typography";
@import "@/styles/mixins/buttons";
@import "@/styles/mixins/breakpoints";

.project-card {
  background-color: $color-white;
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 4px 4px 16px -5px #cecece;

  &__image {
    width: 100%;
  }

  &__details-title {
    @include text-h3();
  }
}

.link-img {
  margin-left: 0.5rem;
}

</style>
