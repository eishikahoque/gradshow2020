<template> 
<div class="profilecard" v-bind:style="{'background-color': color}">
    {{ name }}<br>
    {{ title }}
</div>
</template>

<script>

export default {
  name: "profilecard",
  props: ["name", "title", "color"],
  components: {
    
  },
  data() {
    return {
      test: "hi"
    };
  },
  methods: {}

};
</script>

<style scoped>

.profilecard{
    background-color: pink;
    width: 200px;
    height: 300px;
}

.test{
     background-color: white;
    width: 100px;
    height: 100px;
}

</style>
