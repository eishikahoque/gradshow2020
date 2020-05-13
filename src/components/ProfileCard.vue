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
    <div class="profile-card__content">
      <div class="profilecardName" v-html="name"></div>
      <div class="profilecardTitle">
        {{ title }}
      </div>
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
@import "@/styles/variables";
@import "@/styles/mixins/typography";
@import "@/styles/mixins/buttons";
@import "@/styles/mixins/breakpoints";

.profilecard {
  background-color: white;
  padding: 0.9rem;
  box-shadow: 4px 4px 16px -5px #cecece;
  max-width: 30rem;
  cursor: pointer;
}

.profile-card__content {
  display: flex;
  flex-direction: column;
}

.profilecardName {
  @include text-body-lg();
  font-weight: 900;
  line-height: 22px;
  text-transform: uppercase;
  margin-bottom: 0.45rem;
  color: #3e3e3e;
  display: flex;
}

.profilecardTitle {
  @include text-body-sm();
  display: flex;
  color: $color-black;
  margin-top: auto;
}

.cardImage {
  display: flex;
  margin-bottom: 0.75rem;
  width: 100%;
  height: 100%;
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
  // background-image: linear-gradient(315deg, #c5fbda, #c9f0ff, #fddfff, #c1a2fc);
  background-image: linear-gradient(315deg, #c5fbda, #c9f0ff, #fddfff);
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
