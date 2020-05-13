<template>
  <section class="about">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="section-title"> About Us </h2>
        </div>
      </div>
      <div class="row justify-content-md-end justify-content-sm-center">
        <div class="col-11">
          <p class="about__text"> The times might be uncertain, but our potential is iridescently bright. We are the 
            upcoming designers, developers, and most importantly, problem solvers, who are excited 
            to tackle the next challenge. If you are curious about what more the graduates can do 
            for you, don’t be afraid to start a conversation. Take your time and flow through the 
            web showcase of projects from design to development. </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
	name: "AboutUs"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/mixins/typography";
@import "@/styles/mixins/breakpoints";

.about__text {
  @include text-body-md();
}

</style>
