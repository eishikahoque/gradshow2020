<template>
  <div class="padmini">
    <div class="profileCardContainer">
      <ProfileCard 
        v-for="(profiles, i) in data"
        :key="i"
        :name="profiles.name"
        :title="profiles.title"
        :color="profiles.color"
        class="cardContainer"
      >
        <!-- <div class="test"></div> -->
      </ProfileCard>
    </div>
    <div class="profileModalContainer">
      <ProfileModal
        v-for="(profiles, i) in data"
        :key="i" 
        :name="profiles.name"
        :title="profiles.title"
        :bio="profiles.bio"
        class="modalContainer"
      >
      </ProfileModal>
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
    };
  },
  methods: {}
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
}

.profileModalContainer {
  display: flex;
  margin: 1rem;
}

.modalContainer {
  margin: 0 1rem;
}


</style>