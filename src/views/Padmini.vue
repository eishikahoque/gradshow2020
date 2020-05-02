<template>
  <div class="padmini">
    <section class="filteringSection">
      <h1 class="headerTitle">Students</h1>
      <div class="buttonContainer">
        <button 
          class="filterBtn"
          v-for="(filter, i) in filters"
          :key="i"
          @click="filterStudents(filter.value)"
        >
          {{ filter.label }}
        </button>
      </div>
    </section>
    <div class="profileCardContainer">
      <ProfileCard class="cardContainer"
        v-for="(profiles, i) in filteredData"
        :key="i"
        @open-modal="showModal(i)"
        :id="profiles.id"
        :name="profiles.name"
        :title="profiles.title"
        :color="profiles.color"
        :image="profiles.picture"
        >
      </ProfileCard>
    </div>
    <div class="overlay" v-show="hideOverlay" @click="closeOverlay">
      <div class="profileModalContainer" v-show="hideModal">
        <ProfileModal
          :profile="currentProfile"
          class="modalContainer"
        >
        </ProfileModal>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileCard from '../components/ProfileCard.vue';
import { data } from "../locale/components/profileCard.js";
import ProfileModal from '../components/ProfileModal.vue';
import Filter from '../components/Filter.vue';
export default {
  name: "padmini",
  components: {
    ProfileCard,
    ProfileModal
  },
  data() {
    return {
      originalData: data,
      filteredData: data,
      filters: [
        {
          label: "All",
          value: ""
        },
        {
          label: "UX/UI Designer",
          value: "UXUI"
        },
        {
          label: "Front-End Developer",
          value: "FE"
        },
        {
          label: "Back-End Developer",
          value: "BE"
        },
        {
          label: "Project Manager",
          value: "PM"
        },
        {
          label: "Back-End Developer",
          value: "BE"
        },
      ],
      currentProfile: null,
      showCard: true,
      hideModal: false,
      hideOverlay: false
    };
  },
  methods: {
    hideCard: function(){
      this.showCard = false;
    },
    showModal: function(profileId) {
      this.hideModal = true;
      this.hideOverlay = true;
      this.currentProfile = this.data[profileId];
    },
    closeOverlay: function(){
      this.hideOverlay = false;
    },
    filterStudents: function(selectedFilter) {
      this.filteredData = this.originalData.filter(item => item.keywords.indexOf(selectedFilter) !== -1);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins/typography";

.padmini {
  background-color: #F6FBFE;
  margin: 2rem 1rem;
}

.headerTitle {
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  color: $color-purple;
}


.filteringSection {
  display: flex;
  justify-content: space-between;
}

.profileCardContainer {
  display: flex;
  border-radius: 5px;
  /* -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px); */
}

.profileModalContainer {
  display: flex;
  margin: 1rem;
}

.modalContainer {
  margin: 0 1rem;
}

.overlay {     
  position: absolute;  
  z-index: 1000;   
  display: flex;     
  justify-content: center;     
  align-items: center;     
  width: 100vw;     
  height: 100vh;     
  background: rgba(73, 73, 73, 0.5); 
  left: 0;
  top: 0;
  }

</style>