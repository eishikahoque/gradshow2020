<template>
	<div class="container">
      <div class="row justify-content-center">
        <div class="col-10">
          <h1> Meet </h1>
          <h1> Your Sheridan </h1>
          <img
            class="coming-soon-header"
            :src="require(`../assets/images/${images.imm2020Grads}`)"
            alt="IMM2020 Grads"
          />
          <p> see what they can do for you </p>
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

</style>
