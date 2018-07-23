<template>
    <div class="SearchProductComponent">
        <div class="ProductImg">
            <img :src="img" alt="">
        </div>
        <div class="ProductInfo">
            <span v-for="(v,i) of props.length" :key="i" class="ProductTips">{{props[i]}}</span>
        </div>
        <div class="Price-Shoucang">
            <span class="ProductPrice">¥{{price}}</span>
            <div class="shoucang">
                <span>{{cfav}} </span><i class="iconfont icon-shoucang"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        
        img:null,
        props:null,
        price:null,
        cfav:null
    }
}
</script>
<style lang="less">
.SearchProductComponent{
    width:345px;
    
    background: white;
    margin-bottom:20px;
    border-radius:2%;
    .ProductImg{
        width: 345px;
        height: 450px;
        img{
            width: 345px;
            height: 450px;
        }
    }
    .ProductInfo{
        width: 100%;
        padding: 10px;
        height: 100px;

        
         .ProductTips{
            float: left;
            background: #ebebeb;
            margin-right: 15px;
            margin-bottom:10px;
            font-size: 24px;
            padding: 2px 6px;
            
         }
    
        
    }
    .Price-Shoucang{
        display: flex;
        padding:  10px 10px 15px 10px;
        justify-content: space-between;
        line-height: 36px;
        .ProductPrice{
            font-size: 36px;/*px*/
            font-weight: bold;
        }
    }
   
}
</style>
