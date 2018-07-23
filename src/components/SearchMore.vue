<template>
    <div>
         <div class="topnav">
            <i class="iconfont icon-xiangzuojiantou"></i>
            <div class="topnav-search" @click="doSearch()">
                <i class="iconfont icon-sousuo"></i>
                <span class="top-search-text">新款厚底运动鞋</span>
            </div>
            <i class="iconfont icon-gouwuche"></i>
        </div>
        <div class="searchNav">
            <div v-for="(v,i) of type.searchMoreTypeSort" :key="i" @click="changeSearchMoreTypeSort(i)" :class="{change:i==index}"><p>{{v.title}}</p></div>
            <div>价格</div>
        </div>
        <div class="body" >
             <div class="wrapper" ref="wrapper">
                 <div class="content">
                     <div class="box">
                         <MoreProduct v-for="(v,i) of type.searchMore" :key="i"  :img="v.img" :props="v.props" :price="v.price" :cfav="v.cfav"></MoreProduct>
                         
                     </div>
                 </div>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll";
import MoreProduct from './MoreProduct';
import {mapState,mapMutations,mapActions,mapGitters} from 'vuex'
export default {

    data(){
        return{
          index:null
        }
    },
    components:{
         MoreProduct
    },
    computed:{
        ...mapState(['type'])
    },
    methods:{
        loadScrollwrapper() {
            this.$nextTick(() => {
                this.scroll = new BScroll(this.$refs.wrapper, {
                    click: true,
                });
            });
        },
        ...mapActions(['loadSearchMore']),
        ...mapActions(['loadSearchMoreBySort']),
        changeSearchMoreTypeSort(i){
            this.index=i;
            let sortKey=this.$store.state.type.searchMoreTypeSort[i].sortKey;
            let Obj=this.$route.params.Obj
            Obj.sortKey=sortKey
            // console.log(Obj)
            this.loadSearchMoreBySort(Obj)
        }
       
    },
    mounted(){
        let Obj= this.$route.params.Obj
        this.loadScrollwrapper();
        this.loadSearchMore(Obj);
        
        //console.log(Obj)
       
    }
};
</script>
<style lang="less">
.topnav {
    height: 100px; /*px*/
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 20px 20px; /*px*/
    border-bottom: 2px solid #cccccc;
    i {
        font-size: 45px; /*px*/
        line-height: 60px;
    }

    .topnav-search {
        display: inline-block;
        width: 540px; /*px*/
        height: 60px; /*px*/
        border-radius: 10px;
        background-color: #ebebeb;

        box-sizing: border-box;
        padding-left: 10px;
        .icon-sousuo {
            font-size: 30px; /*px*/
            color: #ccc;
        }

        .top-search-text {
            color: #ccc;
            margin-left: 10px;
            line-height: 60px;
        }
    }
}
.searchNav{
    width: 100%;
    
    display: flex;
    justify-content: space-between;
    text-align: center;
    border-bottom:1px solid #ccc;
    padding: 20px 0px;
    div{
        width: 25%;
        font-size: 28px;/*px*/
        border-left:1px solid #ccc 

        
    }
    
}

.body {
    width: 100%;
    position: absolute;
    top: 180px;
    bottom: 0px;
    overflow: hidden;
    background: #ebebeb;
    .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    }
}
.box{
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

}
.change {
    color: #fc5979;
    background: white;
    p {
        border-left: 10px solid #fc5979;
    }
}

</style>
