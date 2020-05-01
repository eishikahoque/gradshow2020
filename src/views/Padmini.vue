<template>
  <div class="padmini">
    <div class="profileCardContainer">
      <ProfileCard class="cardContainer"
        v-for="(profiles, i) in data"
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
export default {
  name: "padmini",
  components: {
    ProfileCard,
    ProfileModal
  },
  data() {
    return {
      data,
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
    }
  }
}
</script>

<style scoped>
.padmini {
  background-color: #F6FBFE;
  margin: 1rem auto;
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