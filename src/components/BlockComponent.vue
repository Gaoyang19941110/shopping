<template>
    <div class="BlockComponent">
       <div><img :src="image"></div>
       <span>{{title}}</span>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }   
        

    },
    props:{
        image:null,
        title:null
    }  
}
</script>
<style lang="less">
    .BlockComponent{
        display: inline-block;
        margin-bottom:15px;
        text-align: center;
        width: 140px;
        span{
            display: inline-block;
            margin-top:10px
       }
        div{
            width: 110px;
            height: 110px;
            margin: 0 auto;
             img{
                width:110px;
                height:110px;
            }
           
        }
    
        
    }
    
        
   
   
   

</style>
