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
          </div>
          <img
            class="imm-2020"
            :src="require(`../assets/images/${images.imm2020Grads}`)"
            alt="IMM2020 Grads"
          />
          <p class="hero-subtext"> see what they can do for you </p>
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
        imm2020Grads: "imm2020-grads.svg"
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/mixins/typography";
@import "@/styles/mixins/breakpoints";

@include media-breakpoint-up(lg) {
  h1 {
    margin-bottom: -30px;
    @include text-h1();
  }
  .imm-2020 {
    padding-top: 20px;
    width: 90%;
  }
  .hero-subtext {
    @include text-h3();
  }
}

@include media-breakpoint-up(md) {
  h1 {
    @include text-h1();
    margin-bottom: -30px;
  }
  .imm-2020 {
    padding-top: 10px;
  }
}

// @include media-breakpoint-up(sm) {
//   h1 {
//     margin-bottom: -30px;
//     font-size: 60px;
//   }
//   .imm-2020 {
//     padding-top: 20px;
//   }
// }

// @include media-breakpoint-up(xs) {
//   h1 {
//     margin-bottom: -30px;
//     font-size: 60px;
//   }
//   .imm-2020 {
//     padding-top: 20px;
//   }
// }

</style>
