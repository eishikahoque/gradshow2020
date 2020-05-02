<template> 
  <main class="profilecard" @click="$emit('open-modal')">
    <div v-bind:style="{backgroundColor: color}">
      <img v-bind:src="image" class="cardImage" alt="student picture" />
    </div>
    <div class="profilecardName">
      {{ name }} &reg;
    </div>
    <div class="profilecardTitle">
      {{ title }}
    </div>
  </main>

</template>

<script>

export default {
  name: "profilecard",
  props: ["name", "title", "color", "id", "bio", "image"],
  components: {},
  data() {
    return {
    //   data,
    };
  },
  methods: {}

};
</script>

<style scoped>

.profilecard {
  background-color: white;
  margin: 1rem;
  padding: 1rem;
  max-width: 22rem;
}

.profilecardName {
  font-family: "Open Sans", sans-serif;
  font-size: 2.1rem;
  font-weight: 600;
  margin-top: 1rem;
  color: black;
}

.profilecardTitle {
  font-family: "Open Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

.cardImage {
  display: flex;
}

</style>
