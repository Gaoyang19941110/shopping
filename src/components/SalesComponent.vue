<template>
    <div>
        <div class="sales-info">
            <span class="sales-title">{{title }}</span><br>
            <span class="title-info">{{viceTitle | removePunctuation}}</span>
       </div>
        <div class="img"><img :src="image" alt=""></div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:{
        title:null,
        viceTitle:null,
        image:null,
    },
    filters:{
        removePunctuation(data){
            data=data.replace('{','').replace('}','')
            return data
            
        }
    }
}
</script>
<style lang="less">
   .SalesComponent1{
       width: 50%;
       height: 320px;/*px*/
       outline: 1px solid #ccc;
       padding: 20px ;
       float: left;
       text-align: center;
       
       .title-info{
           color: #FC5979;
       } 
       .img{
           margin: 10px auto;
           width: 200px;
           height: 200px;
           img{
               width: 200px;
                 height: 200px;
          }
       }
   }
   .SalesComponent2,.SalesComponent3 {
       width: 50%;
       height: 160px;/*px*/
       outline: 1px solid #ccc;
       float:left;
       padding:0 20px;
       position: relative;
       .sales-info{
           display: inline-block;
           margin-top:40px
       }
       .info{
           text-align: left;
       }
       .title-info{
           color:#FC5979;
       } 
       .img{
           display: inline-block;
           width: 150px;
           height: 150px;/*px*/
           margin-top:2px; 
           position: absolute;
           right: 10px;
           img{
               width: 150px;
           height: 150px;/*px*/
           }
       }
   }
   .SalesComponent4,.SalesComponent5,.SalesComponent6{
        width: 100%/3;
        
        outline: 1px solid #ccc;
        float:left;
        text-align: center;
        padding: 20px 20px 0px 20px;
        .title-info{
           color: #FC5979;
       } 
         .img{
           width: 160px;
           height: 160px;/*px*/
           margin: 10px auto;
           img{
                width: 160px;
                 height: 160px;/*px*/
           }
       }
   }
</style>

