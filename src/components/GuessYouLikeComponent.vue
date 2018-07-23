<template>
    <div class="GuessYouLikeComponent">
        <div class="imgbox"><img :src="img" alt=""> </div>
        <span>{{title}}</span>
        <div class="info">
            <span class="info-price">¥{{price}} </span>
            <div class="info-like">{{cfav}}
                <i class="iconfont icon-shoucang"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        img: null,
        title: null,
        price: null,
        cfav: null
    }
};
</script>
<style lang="less">
.GuessYouLikeComponent {
    width: 50%;
    /* outline: 1px solid; */
    margin-bottom: 15px;
    .imgbox {
        width: 340px;
        height: 450px;
        border-radius: 5%;
        margin: 0px auto;
        img {
            width: 340px;
            height: 450px;
        }
    }
    span {
        display: inline-block;
        margin: 5px 20px 0px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .info {
        margin: 0px 10px 0px 0px;
        position: relative;
        /* outline: 1px solid */
        font-size: 20px; /*px*/
        .info-price {
            font-size: 36px; /*px*/
            margin-left: 20px;
        }
        .info-like {
            display: inline-block;
            position: absolute;
            right: 5px;
            bottom: 5px;
            color: #666;
            font-size: 24px; /*px*/
        }
    }
}
</style>

