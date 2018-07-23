<template>
  
    <div class="wrapper" ref="wrapper">
      <div class="body">  
        <div class="content">
          <div v-for="(v,i) of 30" :key="i">
            123
          </div>
        </div>
      </div>
    </div>
  
</template>

<script>
import BScroll from 'better-scroll'

export default {
  
  mounted(){
    this.$nextTick(()=>{
      this.scroll = new BScroll (this.$refs.wrapper,{})
    })
  }
}
</script>
<style>
  div{
    border: 1px solid black;
    font-size: 40px;/*px*/
  }
  .wrapper{
    width:100%;
    height: 100%;
    position: relative;
    
  }
  .body{
    width: 30%;
    
    top:80px
  }
</style>
