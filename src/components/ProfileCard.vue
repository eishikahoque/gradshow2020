<template> 
  <main class="profilecard">
    <div v-bind:style="{'background-color': color}">
      <img src='../assets/padmini.png' class='cardImage' alt="student picture" />
    </div>
    <div class="profilecardName">
      {{ name }}
    </div>
    <div class="profilecardTitle">
      {{ title }}
    </div>
  </main>

</template>

<script>

export default {
  name: "profilecard",
  props: ["name", "title", "color", "id", "bio"],
  components: {},
  data() {
    return {
      test: "hi"
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
  max-width: 20rem;
}

.profilecardName {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.3125rem;
  font-weight: 600;
  margin-top: 1rem;
}

.profilecardTitle {
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

.cardImage {
  display: flex;
}

</style>
