<template>
    <div class="CommentComponent"> 
        <div class="touxiangimg"><img :src="img" alt=""></div><span class="username">{{username}}</span>
        <div class="ComponentContent">{{content}}  </div>
        <div class="ComponentRemark">
            <span>{{time}}</span><br>
            <span>{{Sstyle}}</span>
        </div>
        <div class="ComponentImg" v-for= " (v,i) of images" :key="i" >
            <img :src="images[i]" alt="">
        </div>
    </div>
</template>
<script>
export default {
    props:{
        img:null,
        username:null,
        content:null,
        time:null,
        Sstyle:null,
        images:null
        
    }
}
</script>
<style lang="less">
    .CommentComponent{
        width: 100%;
        margin-top:10px; 
        border-bottom:1px solid #ccc; 
        padding: 20px 0px;
        .touxiangimg{
            width: 60px;
            height:60px;
            border-radius:100%;
            display: inline-block;
            vertical-align: middle;
            img{
                width: 60px;
                height: 60px;

            }
        }
        .username{
            font-size: 32px;/*px*/
            margin-left: 20px;/*px*/
        }
        .ComponentContent{
            margin-top:10px;
            color:gray;
            font-size: 28px;
            
        }
        .ComponentRemark{
            color:grey;
            margin-top:10px;
        }
        .ComponentImg{
            display: inline-block;
            margin-top:10px;
            width: 120px;
            height: 90px;
            margin-right: 20px;
            img  {
                    width: 120px;
                    height: 120px;
                }
        }
    }
</style>
