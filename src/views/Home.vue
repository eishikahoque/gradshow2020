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
    <section class="projects ">
      <h2 class="section-title">Featured Projects</h2>
      <div class="filteringSection">
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
      </div>
      <div class="row project-carousel col-sm-12">
        <swiper 
          ref="mySwiper" 
          class="swiper" 
          :options="swiperOptions"
        >
          <swiper-slide
            v-for="(project, i) in filteredProjData" :key="i"
          >
            <ProjectCard
              v-bind:project="project"
            />
          </swiper-slide>
          <div class="swiper-pagination" id="slide-counter" slot="pagination"></div>
          <div class="swiper-button swiper-button-prev" id="btn-prev" slot="button-prev"></div>
          <div class="swiper-button swiper-button-next" id="btn-next" slot="button-next"></div>
        </swiper>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import ProjectCard from "../components/ProjectCard";
import { data } from "@/locale/components/projectCard.js";

export default {
  name: "Home", 
  title: 'Auto slides per view / Carousel mode',
  components: {
    Swiper,
    SwiperSlide,
    ProjectCard
  },
  directives: {
    swiper: directive
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
        },
        {
          label:"Interactive Installation",
          value: "inter"
        },
        {
          label:"Case Studies & Articles",   
          value: "csa"   
        }
      ],
      swiperOptions: {
          slidesPerView: 1.5,
          spaceBetween: 50,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'fraction'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
      },
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

<style lang="scss">
@import "@/styles/variables";
@import "@/styles/mixins/typography";
@import "@/styles/mixins/buttons";
@import "@/styles/mixins/breakpoints";

// ======= Home Page =======
.primary-btn {
  @include primary-btn()
}

.section-title {
    margin-bottom: 6rem;
}

// ======= Project Card Carousel =======
.VueCarousel-inner {
  padding-left: 0px;
}

.project-carousel {
  padding-left: 20px
}

.filteringSection {
  margin-bottom: 5rem;
  margin-left: auto;
  width: 70%;
}

.swiper-pagination {
  @include text-h3();
  font-weight: 900;

  &-fraction {
    margin-left: auto;
    bottom: 1px;
    left: 0; 
    width: 100%;
  }
}

.swiper-button {
  // background-color: $color-purple;
  color: $color-white;
  width: 73px;
  height: 73px;
  bottom: 2rem;
}
#btn-prev {
  background-color: $color-light-purple;
  right: 5.1rem;
  left: auto;
}
#btn-next {
  background-color: $color-purple;
}
</style>