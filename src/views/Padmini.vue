<template>
  <div class="padmini">
    <section
      class="filteringSection"
      v-bind:class="{ blurContainer: hideOverlay }"
    >
      <h2 class="headerTitle">Graduates</h2>
      <div class="buttonContainer">
        <button
          class="filterBtn"
          v-for="(filter, i) in filters"
          v-bind:class="{ active: i === selectedFilterIndex }"
          data-toggle="buttons"
          :key="i"
          @click="filterStudents(filter.value)"
        >
          {{ filter.label }}
        </button>
      </div>
    </section>
    <div
      class="profileCardContainer"
      v-bind:class="{ blurContainer: hideOverlay }"
    >
      <ProfileCard
        class="cardContainer"
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
        <ProfileModal :profile="currentProfile" class="modalContainer">
        </ProfileModal>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileCard from "../components/ProfileCard.vue";
import { data } from "../locale/components/profileCard.js";
import ProfileModal from "../components/ProfileModal.vue";

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
          label: "Other",
          value: "OT"
        }
      ],
      selectedFilterIndex: 0,
      currentProfile: null,
      showCard: true,
      hideModal: false,
      hideOverlay: false
    };
  },
  methods: {
    hideCard: function() {
      this.showCard = false;
    },
    showModal: function(profileId) {
      document.body.style.overflow = "hidden";
      this.hideModal = true;
      this.hideOverlay = true;
      this.currentProfile = this.filteredData[profileId];
    },
    closeOverlay: function() {
      document.body.style.overflow = "auto";
      this.hideOverlay = false;
    },
    filterStudents: function(selectedFilter) {
      this.selectedFilterIndex = this.filters.indexOf(selectedFilter);
      this.filteredData = selectedFilter
        ? this.originalData.filter(
            item => item.keywords.indexOf(selectedFilter) !== -1
          )
        : this.originalData;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixins/typography";
@import "@/styles/mixins/breakpoints";

.padmini {
  margin: 2rem;
}

.headerTitle {
  font-weight: 700;
  font-size: 5rem;
  font-family: "Montserrat", sans-serif;
  color: $color-purple;
  text-align: center;
}

.filterBtn {
  margin: 1rem;
  line-height: 2.8rem;
  height: 2.8rem;
  padding: 0 1rem;
  border-radius: 3px;
  font-weight: 400;
  background-color: $color-grey;
  border-color: $color-grey;
  color: $color-black;

  &.active {
    background-color: $color-purple;
    border-color: $color-purple;
    color: $color-white;
    box-shadow: 4px 4px 16px -5px rgba(140, 140, 140, 1);
  }
}

.filterBtn:focus,
.filterBtn.active {
  background-color: $color-purple;
  border-color: $color-purple;
  color: $color-white;
  box-shadow: 4px 4px 16px -5px rgba(140, 140, 140, 1);
}

.filteringSection {
  display: flex;
  flex-direction: column;
  &.blurContainer {
    filter: blur(5px);
    overflow: hidden;
  }
}

.profileCardContainer {
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2rem;
  margin: 0 6rem;
  &.blurContainer {
    filter: blur(5px);
  }
}

.profileModalContainer {
  display: flex;
  margin: 1rem;
}

.modalContainer {
  margin: 0 1rem;
}

.overlay {
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.8);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

@include media-breakpoint-up(sm) {
  .profileCardContainer {
    grid-template-columns: 1fr 1fr;
  }

  .filterBtn {
    line-height: 3.8rem;
    height: 3.8rem;
    padding: 0 3rem;
  }

  .filteringSection {
    text-align: center;
  }
}
@include media-breakpoint-up(md) {
  .profileCardContainer {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@include media-breakpoint-up(lg) {
  .headerTitle {
    text-align: left;
  }
  .profileCardContainer {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .filteringSection {
    flex-direction: row;
    text-align: left;
  }
  .buttonContainer {
    margin-left: 8rem;
  }
}
</style>
