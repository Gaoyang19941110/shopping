<template>
    <div>
        <div class="topnav">
            <i class="iconfont icon-xiaoxizhongxin" ></i>
            <div class="topnav-search" @click="doSearch()">
                <i class="iconfont icon-sousuo"></i><span class="top-search-text">新款厚底运动鞋</span>
            </div>
            <i class="iconfont icon-gouwuche" ></i>
        </div>
        <router-view></router-view>
        <div class="bottomnav">
            <router-link to='homepage' tag="div"><i class="iconfont icon-shouye"></i><br><span>首页</span></router-link>
            <router-link to='type' tag="div"><i class="iconfont icon-fenlei"></i><br><span>分类</span></router-link>
            <router-link to='/shoppingcar' tag='div'><i class="iconfont icon-gouwuche"></i><br><span>购物车</span></router-link>
            <div><i class="iconfont icon-tubiaolunkuo-"></i><br><span>我的</span></div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        doSearch(){
            this.$router.push({
                name:"SearchProduct"
            })
        }
    }
}
</script>

<style lang="less">
.topnav{
    height: 100px;/*px*/
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 20px 20px ;/*px*/
    border-bottom:2px solid #cccccc; 
    i{
        font-size:45px;/*px*/
        line-height: 60px
    }

    .topnav-search{
        display: inline-block;
        width: 540px;/*px*/
        height:60px;/*px*/
        background-color: #ebebeb;
        border-radius: 10px;
        box-sizing: border-box;
        padding-left: 10px;
        .icon-sousuo{
            font-size: 30px;/*px*/
            color:#ccc;
        }
 
        .top-search-text{
           
            color:#ccc;
            margin-left:10px;
            line-height: 60px
        }
    }
  
  }
  
  .bottomnav{
    height: 100px;/*px*/
    border-top:2px solid #ccc; 
    position: fixed;
    width: 100%;
    
    bottom: 0px;
    right: 0px;
    left:0px ;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .bottomnav i{
    font-size:45px;/*px*/
  }
  .active{
      color:#FC5979;
  }
  
 

</style>