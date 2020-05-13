<template>
  <section id="projects">
    <div class="filterContainer" v-bind:class="{ blurContainer: hideOverlay }">
      <h2 class="section-title">Featured Projects</h2>
      <div class="filterContainer-btn">
        <button
          class="primary-btn btn"
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
    <div class="project-carousel">
      <div class="project-carousel__cards">
        <swiper ref="mySwiper" class="swiper" :options="swiperOptions">
          <swiper-slide v-for="(project, i) in filteredProjData" :key="i">
            <ProjectCard v-bind:project="project" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="controls">
        <div
          class="swiper-pagination"
          id="slide-counter"
          slot="pagination"
        ></div>
        <div class="swiper-buttons" />
        <div
          class="swiper-button swiper-button-prev"
          id="btn-prev"
          slot="button-prev"
        ></div>
        <div
          class="swiper-button swiper-button-next"
          id="btn-next"
          slot="button-next"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import ProjectCard from "../components/ProjectCard";
import { data } from "@/locale/components/projectCard.js";

export default {
  name: "Home",
  title: "Auto slides per view / Carousel mode",
  components: {
    Swiper,
    SwiperSlide,
    ProjectCard
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      hideOverlay: false,
      projectData: data,
      filteredProjData: data,
      projFilters: [
        {
          label: "All",
          value: ""
        },
        {
          label: "Mobile/Web App",
          value: "app"
        },
        {
          label: "AR/VR Experience",
          value: "ar/vr"
        },
        {
          label: "Interactive Installation",
          value: "inter"
        },
        {
          label: "Case Studies & Articles",
          value: "csa"
        }
      ],
      swiperOptions: {
        slidesPerView: 1.25,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "fraction"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          "576": {
            spaceBetween: 20,
            slidesPerView: 2
          },
          "992": {
            spaceBetween: 30,
            slidesPerView: 2.25
          }
        }
      },
      selectedProjFilterIndex: 0
    };
  },
  methods: {
    filterProjects: function(selectedProjFilter) {
      this.selectedProjFilterIndex = this.projFilters.indexOf(
        selectedProjFilter
      );
      this.filteredProjData = selectedProjFilter
        ? this.projectData.filter(
            item => item.keywords.indexOf(selectedProjFilter) !== -1
          )
        : this.projectData;
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/variables";
@import "@/styles/mixins/typography";
@import "@/styles/mixins/buttons";
@import "@/styles/mixins/breakpoints";

// ======= Project Card Carousel =======
.VueCarousel-inner {
  padding-left: 0px;
}

.project-carousel {
  padding-left: 20px;

  &__cards {
    align-items: stretch;
    margin-bottom: 4rem;
  }
}

.swiper-wrapper {
  display: flex;
  align-items: stretch;
}
.swiper-slide {
  display: flex;
  height: unset;
}

.swiper-pagination {
  @include text-h3();
  font-weight: 900;
  text-align: left;

  &-fraction {
    margin-left: auto;
    width: 100%;
    position: relative;
  }
}

.swiper-button {
  position: relative;
  color: $color-white;
  width: 73px;
  height: 73px;
  display: flex;
}

#btn-prev {
  background-color: $color-light-purple;
  right: 1rem;
  left: auto;
}

#btn-next {
  background-color: $color-purple;
}

.controls {
  display: flex;
  align-items: end;
}

.swiper-buttons {
  display: flex;
  align-content: center;
}

@include media-breakpoint-down(md) {
  .filterContainer {
    width: 100%;
  }
}
</style>
