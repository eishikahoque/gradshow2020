<template>
	<div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12">
          <h1> Meet </h1>
          <h1> Your Sheridan </h1>
          <h1 class="outline"> IMM2020 Grads </h1>
          <p class="hero-subtext"> see what they can do for you </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
	name: "Hero",
	data: function(){
    return {};
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

.outline {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: $color-purple;
  color: rgba(0, 0, 0, 0);
  padding-bottom: 0;
}

.hero-subtext {
  @include text-body-sm(); 
  padding-top: 10px;
}

@include media-breakpoint-up(sm) {
  h1 {
    @include text-h1();
    margin-bottom: -30px;
  }
  .outline {
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: $color-purple;
    color: rgba(0, 0, 0, 0);
    padding-bottom: 0;
  }
  .hero-subtext {
    @include text-body-lg();
    padding-top: 38px; 
  }
}

</style>
