<template>
    <div>
        <div class="SearchProductTopNav">
            <i class="iconfont icon-xiangzuojiantou"></i>
            <input type="text" placeholder="宝宝" autofocus v-model="SearchKeyword" >
            <span @click="seacrhMoreListByBtn()">搜索</span>
        </div>
        <div class="hotSearch">
            <!-- <i class="iconfont icon-sousuo"></i>历史搜索<br>
            <div class="histroySearcKeyWordbox">
                 <div v-for="(v,i) of search.histroySearch " :key="i" class="keyword">{{v.query}}</div>
            </div> -->
            <i class="iconfont icon-shoucang"></i>热门搜索<br>
            <div class="hotSearchKeyWordbox">
                <div v-for="(v,i) of search.hotSearch " :key="i" class="keyword" :style="{'color':v.color}" @click="seacrhMoreList(i)">{{v.query}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    data(){
        return{
            i:0,
            index:0,
            color:'color',
            SearchKeyword:null,
        }
    },
    computed:{
        ...mapState(['search'])
    },
    methods:{
       ...mapActions(['loadHotSearchDatasByParam']),
       seacrhMoreList(i){
           let q=this.$store.state.search.hotSearch[i].query
           console.log(q)
           this.$router.push({
               name:'SearchList',
               params:{
                   q:q
               }
           })

       },
       seacrhMoreListByBtn(){
           
          let q=this.SearchKeyword
          this.$router.push({
               name:'SearchList',
               params:{
                   q:q
               }
           })
       }

      

    },
    mounted(){
        this.loadHotSearchDatasByParam();
        console.log(this);
        
       

    }
}
</script>
<style lang="less">
    .SearchProductTopNav{
        padding: 20px;
        display: flex;
        justify-content: space-between;
        border-bottom:1px solid #ccc;
        input{
            outline: none;
            border-radius:5%;
            border: 1px solid #ccc;
            width:75%;
            height: 60px;
            font-size: 24px;
        }
        i{
            font-size:36px;
            line-height: 60px;
        }
        span{
            font-size:36px;
            line-height: 60px;
            color:gray;
        }
    }
    input:focus{
        border:1px solid #FC5979;
    }
    .hotSearch{
        padding: 20px;
        color:gray;
        font-size: 28px;
       
    }
    .hotSearchKeyWordbox{
      
       
        
        padding:10px 28px;
        flex-wrap: wrap;
        .keyword{
            border: 1px solid #ccc;
            display: inline-block;
            margin-right: 20px;
            padding:5px 10px;
            border-radius:10%;
            margin-top: 10PX;

        }
    }
    .histroySearchKeyWordbox{
      
       
        
        padding:10px 28px;
        flex-wrap: wrap;
        .keyword{
            border: 1px solid #ccc;
            display: inline-block;
            margin-right: 20px;
            padding:5px 10px;
            border-radius:10%;
            margin-top: 10PX;

        }
    }
</style>
