<template>
    <div class="RightTypeNav">
        <div><img :src="image" alt=""></div>
        <span>{{title}}</span>
    </div>
</template>
<script>
export default {
    props:{
        title:null,
        image:null,
    }
}
</script>
<style lang="less">
    .RightTypeNav{
        width: 160px;
        height: 200px;
        // outline: 1px solid;
        margin-bottom:10px;
        box-sizing: border-box;
        padding: 0px 15px 15px 15px;
        text-align: center;
        
        div{
            width: 130px;
            height: 130px;
            img{
                width: 130px;
                height: 130px;
            }
            
        }
        span{
                display: inline-block;
                margin-top:10px;
            }
    }
</style>

