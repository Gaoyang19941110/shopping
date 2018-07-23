<template>
    <div>
        <div class="TOP">
            <div><i class="iconfont icon-xiangzuojiantou"></i></div>
            <div class="topnav-title">购物车</div>
            <div><i class="iconfont icon-xiaoxizhongxin"></i>编辑</div>
        </div>
        <div class='gouwuchebody'>
            <div class="wrapper" ref="wrapper">
                <div class="content">
                    <payProduct></payProduct>
                </div>
            </div>
        </div>
        <div class="bottomnav">
           
        </div>
    </div>
</template>
<script>
import payProduct from './payProduct';
export default {
    components:{
        payProduct
    }
}
</script>

<style lang='less'>
 .TOP{
     width: 100%;
     height: 100PX;
     display: flex;
     padding:20px 20px;
     box-sizing: border-box;
     justify-content: space-between;
     font-size: 32px;
     .topnav-title{
         font-size: 36px;
         line-height:36px
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
  .gouwuchebody{
      position: absolute;
      top:100px;
      bottom: 100px;
      background: #ebebeb;
      width: 100%;
      
      .wrapper{
         width: 100%;
        height: 100px;
         position: relative;
          .content{
            width:100%;
      }
      }
     
  }
</style>
