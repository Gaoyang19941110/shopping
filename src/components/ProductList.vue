<template>
    <div>
        <div class="ProductListBody">
            <div class="wrapper" ref="wrapper">
                <div class="content">
                    <div class="ProductList-box">
                        <div class="ProductListImg">
                            <img :src="img" alt="">
                        </div>
                        <div class="ProductListTitle">
                           {{title}}
                        </div>
                        <div>
                            <div class="NewPrice">
                                <span class="rmb">¥</span>
                                <span class="ProductListPrice">{{price}}</span>
                            </div>
                            <div class="OldPrice">
                                <span class="ProductListPrice">¥{{orgPrice}}</span>
                                <div class="pintuan">拼团价</div>
                            </div>
                            <div class="postFree">  
                                免邮费
                            </div>
                            <div class="ProductService">
                                <div><i class="iconfont icon-xuanze"> </i> 72小时发货</div>
                                <div><i class="iconfont icon-xuanze"> </i> 7天无理由退货</div>
                                <div><i class="iconfont icon-xuanze"> </i> 退货补运费</div>
                                <div><i class="iconfont icon-xiangzuojiantou"></i></div>
                            </div>

                        </div>

                    </div>
                    <div class="ProductList-Select-box">
                        <div>请选择尺寸：颜色 尺码</div><i class="iconfont icon-xiangzuojiantou"></i>
                    </div>
                    <div class="ProductList-Comment-box">
                        <span >买家评价 ｜</span>  <i class="iconfont icon-shoucang"></i><span>{{cfav}}</span>
                            <CommentComponent  v-for="(v,i) of productinfo.CommentBox" :key="i" :img="v.user.avatar" :username="v.user.uname" :content="v.content" :Sstyle="v.style" :time="v.time" :images="v.images"></CommentComponent> 

                    </div>
                </div>
            </div>
        </div>
        <div class="ProductList-BottomNav">
            <div class='SHOUCANG'><i class="iconfont icon-shoucang"></i><br>收藏</div>
             <div class='SHOPING'><i class="iconfont icon-shop"></i><br>小店</div>
             <div class='GOUWUCHE'>加入购物车</div>
             <div class="payNow">立即购买</div>
        </div>
        <div class="Easy-Nav">快捷<br>导航</div>
        <div class="Chat-Us"><i class="iconfont icon-xiaoxizhongxin"></i><br>私聊</div>
    </div>
</template>
<script>
import BScroll from "better-scroll";
import { mapState, mapMutations, mapActions, mapGitters } from "vuex";
import CommentComponent from './CommentComponent.vue'
export default {
     components:{
         CommentComponent
     },
    data(){
        return{
            title:null,
            cfav:null,
            img:null,
            price:null,
            orgPrice:null,
            iid:null,
            num:null
         
        }
    },
    computed:{
        ...mapState(['productinfo']),
        
    },
    methods:{
        ...mapActions(['loadComment']),
     
    },
    mounted() {
        this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.wrapper, {
                click: true
            });
        });
        let obj=this.$route.params.obj
        // this.cfav=obj.cfav
        this.title=obj.title
        this.img=obj.img
        this.orgPrice=obj.orgPrice
        this.price=obj.price
        this.iid=obj.iid
        this.cfav=obj.cfav
        let params=this.iid
        // console.log("-------"+this)
        this.num=this.$store.state.productinfo.CommentBox.length
        console.log("============>"+this.num)
        // console.log(this.num)
        this.loadComment(params)

    }
};
</script>
<style lang="less">
.ProductListBody {
    width: 100%;
    position: absolute;
    top: 0px;
    bottom: 100px;
    // overflow: hidden;
    border-bottom:1px solid #ccc;
    background-color: #ebebeb;

    
    .wrapper {
        width: 100%;
        height: 100%;
        // position: relative;
        .ProductList-box{
            width:100%;
            padding: 0px 20px;
            background: white;
            margin-bottom:15px; 
            .ProductListImg{
                width: 100%;
                height: 900px;
                background: black;
                img{
                    width:100%;
                    height:900px;
                }
            }
            .ProductListTitle{
                font-size: 36px;
                color:#3c3c3c;
                margin-top:10px ;
                margin-bottom: 10px;
                
            }
            div{
                
                .NewPrice{
                    display: inline-block;
                    
                    .ProductListPrice{
                        font-size:80px ;
                        vertical-align: top;
                        line-height: 80px
                        
                    }
                }
                .OldPrice{
                    display: inline-block;
                    .pintuan{
                        background: #FEE6E8;
                        padding: 2px;
                        color:#fc5979
                    }
                    .ProductListPrice{
                        font-size: 28px;
                        color: gray;
                        text-decoration:line-through
                    }
                }
                .postFree{
                    font-size: 28px;
                    color: gray;
                    padding: 10px 0px;
                }
                .ProductService{
                    display: flex;
                    justify-content: space-between;
                    padding: 20px 0px;
                    border-top:1px solid #cccccc; 
                    .icon-xuanze{
                        color:#fc5979;
                    }
                }
            }
            
        }
        .ProductList-Select-box{
            background: white;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
        }
        .ProductList-Comment-box{
            background: white;
            padding: 20px;
        }
    }
}
.ProductList-BottomNav{
    position: absolute;
    bottom: 0px;
    display: flex;
    width: 100%;
    height: 100px;
    text-align: center;
    
    .SHOUCANG{
        width: 15%;
        padding-top: 20px;
    }
    .SHOPING{
        width: 15%;
        border-left:1px solid #ccc;
        padding-top: 20px;
    }
    .GOUWUCHE{
        width: 35%;
        background:#FEE6E8;
        font-size: 32px;/*PX*/
        line-height: 100px;
        color:#fc5979;
    }
     .payNow{
        width: 35%;
        background:#fc5979;
          font-size: 32px;/*PX*/
          line-height: 100px;
          color:white
    }
}
.Easy-Nav{
    width: 100PX;
    height: 100px;
    border-radius: 100%;
    z-index: 999;
    background: #3c3c3c;
    position: absolute  ;
    bottom: 250px;
    right: 50px;
    color:white;
    text-align: center;
    padding-top: 20PX;
     opacity:0.7;
}
.Chat-Us{
    width: 100PX;
    height: 100px;
    border-radius: 100%;
    z-index: 999;
    background: #3c3c3c;
    position: absolute  ;
    bottom: 125px;
    right: 50px;
    color:white;
    text-align: center;
    padding-top: 20PX;
     opacity:0.7;
}
</style>
