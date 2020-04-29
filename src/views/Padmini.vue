<template>
    <div class="padmini">
        <h1>
            <ProfileCard />
        </h1>
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