<template>
  <div class="container">
    <!-- HEADER -->
    <Header />
    <!-- COMING SOON -->
    <ComingSoon />
  </div>
</template>

<script>
// @ is an alias to /src
import ComingSoon from "@/views/ComingSoon.vue";
import Header from "@/components/Header";

export default {
  name: "Home",
  components: {
    Header,
    ComingSoon
  }
};
</script>
