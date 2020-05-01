<template>
  <div>
    <header>
      <div class="row">
        <div class="column">
          <img src="../assets/images/imm-logo.svg" alt="" srcset="" />
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  margin: 120px 0;
}

// MEDIA QUERY FOR SCREENS LESS THAN 960px
@media only screen and (max-width: 960px) {
  header {
    text-align: center;
    margin: 70px 0;
  }
}
</style>
