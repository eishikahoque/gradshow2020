<template>
  <main class="modal">
    <div class="imageGradient" v-bind:style="{backgroundImage: `linear-gradient(180deg, rgba(151,135,184,0.4) 0%, rgba(71,43,122,0.95) 100%), url(${profile.picture})`}">
      <div class="jobTitle">
        {{ profile.hash1 }}
        {{ profile.hash2 }}
        {{ profile.hash3 }}
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
        <button class="button button-outline" 
          target="_blank"
          @click="viewPortfolio"
        >
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
      // portfolio: this.props.profile.portfolio
    };
  },
  methods: {
    viewPortfolio: function() {
      window.open(this.profile.portfolio, "_blank");
    }
  }
}
</script>

<style scoped>
.modal {
  width: 50rem; 
  height: 50rem;
  background-color: white;
}

.imageGradient {
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3rem;
  padding-top: 4rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  width: 50rem;
  height: 50rem;
}

.jobTitle {
  font-family: "Montserrat", sans-serif;
  font-size: 1.25rem;
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
  font-size: 3.5rem;
  background: -webkit-linear-gradient(180deg, #c5fbda, #c6bdf5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.studentBlurb {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 1.25rem;
  color: white;
}

.button.button-outline {
  color: white;
  margin-top: 2rem;
  border-color: white;
  max-width: 40%;
}

.button.button-outline:hover {
  color: white;
  border-color: white;
}

</style>