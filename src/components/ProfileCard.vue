<template>
  <main class="profilecard" @click="$emit('open-modal')">
    <div
      v-bind:style="{
        backgroundColor: color
      }"
      class="gradient"
    >
      <img v-bind:src="image" class="cardImage" alt="student picture" />
    </div>
    <div class="profilecardName">{{ name }}&reg;</div>
    <div class="profilecardTitle">
      {{ title }}
    </div>
  </main>
</template>

<script>
export default {
  name: "profilecard",
  props: ["name", "title", "color", "gradient", "id", "bio", "image"],
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixins/breakpoints.scss";

.profilecard {
  background-color: white;
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 4px 4px 16px -5px #cecece;
}

.profilecardName {
  font-family: "Open Sans", sans-serif;
  font-size: 2.1rem;
  font-weight: 600;
  margin-top: 1rem;
  color: #3e3e3e;
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

.gradient {
  position: relative;
  background-color: color;
  z-index: 1;
}

.gradient::before {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(315deg, #c5fbda, #c9f0ff, #fddfff, #c1a2fc);
  z-index: -1;
  transition: opacity 0.5s linear;
  opacity: 0;
}

.gradient:hover::before {
  opacity: 1;
}

@include media-breakpoint-up(sm) {
  .profilecard {
    box-shadow: 6px 6px 16px -5px #f4f5f6;
  }
}


</style>
