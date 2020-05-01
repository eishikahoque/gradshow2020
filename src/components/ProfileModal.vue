<template>
  <main class="modal">
    <div class='title'>
      {{ title }}
    </div>
    <section class="studentDescription">
      <div class="className">
        IMM 2020
      </div>
      <div class="studentName">
        {{ name }}
      </div>
      <div class="studentBio">
        {{ bio }}
      </div>
      <button class="button button-outline">
        View Portfolio
      </button>
    </section>
  </main>
</template>

<script>

export default {
  name: "profilemodal",
  props: ["name", "title", "bio"],
  components: {},
  data() {
    return {
      test: "hi"
    };
  },
  methods: {}
}
</script>

<style scoped>
.modal {
  width: 40rem; 
  height: 40rem;
  background-image:  url('../assets/padmini.png'), linear-gradient(180deg, rgba(210,203,224,1) 0%, rgba(70,42,128,1) 100%);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3rem 4rem;
  display: flex; 
  flex-direction: column;
}

.title {
  font-family: 'Montserrat', sans-serif;
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
  font-family: 'Montserrat', sans-serif;
  font-size: 1.3125rem;
  font-weight: 600;
}

.studentName {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 2.125rem;
  color: white;
}

.studentBio {
  font-family: 'Montserrat', sans-serif;
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