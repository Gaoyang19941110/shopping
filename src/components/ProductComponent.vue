<template>
    <div class="ProductComponent">
        <div class="ProductPic"><img :src="img" alt=""></div>
        <span class="ProductInfoTitle">{{title}}</span>
        <div class="ProductInfo">
            <span>¥{{price}}</span>
            <div class="info-shoucang">{{cfav}}
                <i class="iconfont icon-shoucang"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        img:null,
        title:null,
        price:null,
        cfav:null
    }
}
</script>
<style lang="less">
    .ProductComponent{
        width: 250px;
        
        // outline: 1px solid ;
        margin-bottom:20px;
        .ProductPic{
            width:250px;
            height:300px;
            margin-bottom:5px;
            img{
                width:250px;
            height:300px;
            }
        }
        .ProductInfoTitle{
            margin-left:10px;
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            
        }
        .ProductInfo{
           margin-left:10px;
           display: flex;
           justify-content: space-between;
          
           span{
               font-size:32px;
               font-weight: bold;
               color:#fc5979
           }
        }
    }
</style>
