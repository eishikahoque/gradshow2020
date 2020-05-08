<template>
	<div class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="row flex-column">
            <div class="col">
              <h1> Meet </h1>
            </div>
            <div class="col">
              <h1> Your Sheridan </h1>
            </div>
            <div class="ml-4">
            <img
              :src="require(`../assets/images/${images.imm2020}`)"
              alt="IMM2020 Grads"
              class="imm2020"
            />
            <img
              :src="require(`../assets/images/${images.grads}`)"
              alt="IMM2020 Grads"
              class="grads"
            />
            </div>
          </div>
          <p class="hero-subtext ml-3"> see what they can do for you </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
	name: "Hero",
	data: function(){
    return {
      images: {
        imm2020: "IMM2020.svg",
        grads: "Grads.svg",
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/mixins/typography";
@import "@/styles/mixins/breakpoints";

h1 {
  font-size: 48px;
  margin-bottom: -5px;
}

.imm2020 {
  width: 50%;
  margin: 5px 8px 0 0;
}

.grads {
  width: 30%;
  padding-top: 5px;
}

.hero-subtext {
  @include text-body-sm(); 
  padding-top: 5px;
}

@include media-breakpoint-up(sm) {
  h1 {
    @include text-h1();
    margin-bottom: -30px;
  }
  .imm2020 {
    margin: 0 20px 0 0;
  }
  .hero-subtext {
    @include text-body-lg(); 
  }
}

</style>
