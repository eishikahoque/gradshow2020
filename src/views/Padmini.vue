<template>
    <div class="padmini">
        <div class="profileCard">
            <ProfileCard 
            v-for="(profiles, i) in data" 
            :key="i" 
            :name="profiles.name" 
            :title="profiles.title"
            :color="profiles.color" >
            <!-- <div class="test"></div> -->
            </ProfileCard>
        </div>
    </div>
</template>

<script>
import ProfileCard from '../components/ProfileCard.vue'
import { data } from "../locale/components/profileCard.js";
export default {
  name: "padmini",
  components: {
    ProfileCard,
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



</style>