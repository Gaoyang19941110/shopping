<template>
    <div class="homebody">
        <div class="wrapper" ref="wrapper">
            <div class="content">
                <div class="warp">
                    <swiper :options="swiperOptions">
                        <swiperSlide v-for="(v,i) of home.warpImg" :key="'warp'+i"><img :src="v.image_800" alt="" srcset=""></swiperSlide>

                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
                <div class="BlockComponents">
                    <block-component v-for="(v,i) of home.blocks" :key="'types'+i" :title="v.title" :image="v.image"></block-component>
                </div>
                <div class="SalesComponents">
                    <div class="title">
                        <div class="tip-line-pre"></div>
                        <span class="tip-rhombus-pre">◆</span>
                        <span class="tip-title"> 超实惠-促销直达 </span>
                        <span class="tip-rhombus-after">◆</span>
                        <div class="tip-line-after"></div>

                    </div>
                    <div class='SalesComponentBox'>
                        <SalesComponent v-for="(v,i) of home.sales" :key="'Bebefit'+i" :class="'SalesComponent'+(i+1)" :title="v.title" :image="v.image" :viceTitle="v.viceTitle"></SalesComponent>
                    </div>
                </div>
                <div class="HotClassifyComponents">
                    <div class="title">
                        <div class="tip-line-pre"></div>
                        <span class="tip-rhombus-pre">◆</span>
                        <span class="tip-title"> 热门分类 </span>
                        <span class="tip-rhombus-after">◆</span>
                        <div class="tip-line-after"></div>
                    </div>
                    <div class="HotClassifyComponentBox">
                        <HotClassifyComponent v-for="(v,i) of home.Hotclassfy" :key="i" :class="'HotClassifyComponent'+(i+1)" :image="v.image" :title="v.title"></HotClassifyComponent>
                    </div>
                </div>
                <div class="GuessYouLikeComponents">
                    <div class="title">
                        <div class="tip-line-pre"></div>
                        <span class="tip-rhombus-pre">◆</span>
                        <span class="tip-title"> 猜你喜欢 </span>
                        <span class="tip-rhombus-after">◆</span>
                        <div class="tip-line-after"></div>
                    </div>
                    <div class="GuessYouLikeComponentBox">
                        <GuessYouLikeComponent v-for="(v,i) of home.Likes" :key="i" :img="v.img" :title="v.title" :price="v.price" :cfav="v.cfav" @click.native="gotoProductList(i)"></GuessYouLikeComponent>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll";

import { swiper, swiperSlide } from "vue-awesome-swiper";
import BlockComponent from "./BlockComponent";
import SalesComponent from "./SalesComponent";
import HotClassifyComponent from "./HotClassifyComponent";
import GuessYouLikeComponent from "./GuessYouLikeComponent";
import { mapState, mapMutations, mapActions, mapGitters } from "vuex";
export default {
    components: {
        swiper,
        swiperSlide,
        BlockComponent,
        SalesComponent,
        HotClassifyComponent,
        GuessYouLikeComponent
    },
    data() {
        return {
            swiperOptions: {
                autoplay: 2000,
                loop: true,
                pagination: ".swiper-pagination"
            }
        };
    },
    computed: {
        ...mapState(["home"])
    },
    methods: {
        ...mapActions(["loadHomeData"]),
        ...mapActions(["loadGuessYouLike"]),
        gotoProductList(i) {
            console.log(this)
            let obj=this.$store.state.home.Likes[i];
            this.$router.push({
                name: "ProductList",
                params:{
                    obj:obj
                }
            });
            console.log(obj)
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.wrapper, {
                click: true
            });
        });
        this.loadHomeData();
        this.loadGuessYouLike();
    }
};
</script>
<style lang="less">
.wrapper {
    width: 100%;
    height: 100%;
    position: relative;
}
.homebody {
    width: 100%;
    position: absolute;

    top: 100px;
    bottom: 100px;
    overflow: hidden;
}
.warp {
    width: 100%;
    img {
        width: 100%;
        height: 300px;
    }
}
.BlockComponents {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 20px 10px 10px 10px;
    justify-content: space-between;
    margin-bottom: 30px;
    margin-top: 10px;
    // outline: 1px solid black;
}
.SalesComponents {
    //   outline: 1px solid black;
    //   background:lightcoral;
    margin-bottom: 50px; /*px*/
    box-sizing: border-box;
}
.title {
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;

    height: 40px; /*px*/
    // outline: 1px solid
}
.tip-line-pre {
    width: 150px;
    height: 0px;
    border: 1px solid;
    margin-top: 15px;
    margin-left: 100px;
}
.tip-line-after {
    width: 150px;
    height: 0px;
    border: 1px solid;
    margin-top: 15px;
    margin-right: 100px;
}
.tip-title {
    line-height: 40px;
    display: inline-block;
    width: 250px;
    text-align: center;
}

.SalesComponentBox {
    // outline: 1px solid black;
    width: 100%;
    padding-top: 20px;
    border-bottom: 2px solid #ccc;

    //   display: flex;
    //   flex-wrap: wrap;
}
.SalesComponents {
    margin-bottom: 30px;
}
.HotClassifyComponents {
    margin-bottom: 30px;
}
.HotClassifyComponentBox {
    // outline: 1px solid black;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px 10px 10px 10px;
    box-sizing: border-box;
}
.GuessYouLikeComponents {
    margin-bottom: 30px;
}
.GuessYouLikeComponentBox {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 30px 10px 10px 10px;
    box-sizing: border-box;
}
</style>
