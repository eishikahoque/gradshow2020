<template>
<div class="overlay">

</div>
    
</template>

<script>
import ProfileModal from './ProfileModal.vue';

export default {
  name: 'overlay',
  components: {
    ProfileModal
  },
  data(){
    return {

    }
  },
  methods:{
    
  }

}
</script>

<style scoped>

.overlay {     
  position: absolute;  
  z-index: 1000;   
  display: flex;     
  justify-content: center;     
  align-items: center;     
  width: 100vw;     
  height: 100vh;     
  background: rgba(0, 0, 0, 0.5); 
  left: 0;
  top: 0;
  }
  
</style>