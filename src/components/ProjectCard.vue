<template> 
  <main class="projectcard" v-bind:style="{backgroundColor: mainColor}">
    <div>
      <img v-bind:src="image" alt="project image" />
    </div>
    <div class="profilecardName">
      <h2> {{ name }} </h2>
      <h4> By: {{ students }} </h4>
      <p> {{ description }} </p>
      <a v-bind:href="link"> <button> See a Live Demo </button> </a>
    </div>
  </main>
</template>

<script>

export default {
  name: "projectcard",
  props: ["id", "name", "description", "image", "students", "link", "mainColor"],
  components: {},
  data() {
    return {};
  },
  methods: {}

};
</script>

<style scoped>

.projectcard {
  background-color: white;
  border: 1px solid black;
}

</style>
