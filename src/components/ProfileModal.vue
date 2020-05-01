<template>
  <main class="modal" >
    <div class="imageGradient" v-bind:style="{backgroundImage: `linear-gradient(180deg, rgba(210,203,224,0.4) 0%, rgba(70,42,128,0.9) 100%), url(${profile.picture})`}">
      <div class="jobTitle">
        {{ profile.title }}
      </div>
      <section class="studentDescription">
        <div class="className">
          IMM 2020
        </div>
        <div class="studentName">
          {{ profile.name }}
        </div>
        <div class="studentBlurb">
          {{ profile.blurb }}
        </div>
        <button class="button button-outline">
          View Portfolio
        </button>
      </section>
    </div>
  </main>
</template>

<script>

export default {
  name: "profilemodal",
  props: ["profile"],
  components: {},
  data() {
    return {
      // picture: this.props.profile.image
    };
  },
  methods: {}
}
</script>

<style scoped>
.modal {
  width: 40rem; 
  height: 40rem;
  background-color: white;
}

.imageGradient {
  /* background-image: url(${this.props.profile.picture}), linear-gradient(180deg, rgba(210,203,224,0.75) 0%, rgba(70,42,128,0.75) 100%); */
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3rem 4rem;
  display: flex; 
  flex-direction: column;
  width: 40rem; 
  height: 40rem;
}

.jobTitle {
  font-family: "Montserrat", sans-serif;
  font-size: 1.125rem;
  display: flex; 
  justify-content: flex-end;
  flex: 1;
  color: white;
}

.studentDescription {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.className {
  color: #FBB6CB;
  font-family: "Montserrat", sans-serif;
  font-size: 1.3125rem;
  font-weight: 600;
}

.studentName {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 2.125rem;
  color: white;
}

.studentBlurb {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 1.125rem;
  color: white;
}

.button.button-outline {
  color: white;
  margin-top: 2rem;
  border-color: white;
  max-width: 54%;
}

.button.button-outline:hover {
  color: white;
  border-color: white;
}

</style>