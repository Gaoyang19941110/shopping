<template>

  <div id="app">
    
    <router-view/>
    <!-- <HomePage></HomePage> -->
    
  </div>
</template>

<script>
// import HomePage from './components/HomePage.vue';
export default {
  name: 'App',
  components:{
    // HomePage
  }
}
</script>

<style >
  *:not(.swiper-wrapper){
  
    margin: 0;
    padding: 0;
    overflow: hidden;
    box-sizing: border-box;
    
  }
  #app{
    position: absolute;
    
    top:0px;
    bottom: 0px;
    left: 0px;
    right:0px;
   
   
  }
  
  
</style>
