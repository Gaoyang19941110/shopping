<template>
    <div class="TypeBody">
        <div class="left-body">
            <div class="wrapper" ref="left">
                <div class="content">
                    <div v-for="(v,i) of type.leftNav" :key="i" class="left-body-nav" :title="v.title" @click="changeRightNav(i)" :class="{change:i==id}">
                        <p>{{v.title}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="right-body">
            <div class="wrapper" ref="right">
                <div class="content">
                    <div class="right-type-nav-box">
                        <RightTypeNav v-for="(v,i) of type.rightNav" :key="'rt'+i" :title="v.title" :image="v.image" @click.native="seacrhMore(i)"></RightTypeNav>
                        <div class="RightTypeNavSet" v-for='(v,i) of 3-(type.rightNav.length%3==0?3:type.rightNav.length%3)' :key="'post'+i"></div>
                    </div>
                    <div class="Productdisplay">
                        <div class="ProductdisplayNav"  >
                            <div v-for="(v,i) of type.typeSort" :key="i" class="Productdisplay-Nav" :class="{changeSort:i==index}" @click="changetypeSort(i)"><p>{{v.title}}</p></div>
                        </div>
                        <div class="ProductdisplayBox">
                            <product-component v-for="(v,i) of type.rightProduct" :key="i" :img="v.img" :title="v.title" :price="v.price" :cfav="v.cfav"></product-component>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>
<script>
import BScroll from "better-scroll";
import RightTypeNav from "./RightTypeNav";
import ProductComponent from "./ProductComponent"
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    data() {
        return {
            id: 0,
            index:0
        };
    },
    props: {
        title: null
    },
    components: {
        RightTypeNav,ProductComponent
    },
    computed: {
        ...mapState(["type"]),
       setSet:function(){

       }
    },
    methods: {
        
        loadScrollleft() {
            this.$nextTick(() => {
                this.scroll = new BScroll(this.$refs.left, {
                    click: true
                });
            });
        },
        loadScrollright() {
            this.$nextTick(() => {
                this.scroll = new BScroll(this.$refs.right, {
                    click: true,

                });
            });
        },
        ...mapActions(["loadTypeData"]),
        ...mapActions(["loadRightTypeData"]),
        ...mapActions(['loadRightProduct']),
        ...mapActions(['loadtypeSort']),

        changeRightNav(i) {
            this.id = i;
            let params = this.$store.state.type.leftNav[i].maitKey;
            
            let needfcid=this.$store.state.type.leftNav[i].miniWallkey;
             this.index=0;
                
            let Obj={
                fcid:needfcid,
                page:1,
                sort:1,
                cKey:"h5-cube"
            }
            let obj1={
                fcid:10062603,
                page:1,
                sort:1,
                cKey:"h5-cube"
            }
            this.loadRightTypeData(params);
            this.loadRightProduct(Obj);
            
        },
        changetypeSort(i){
           this.index=i;
           let sortkey=this.$store.state.type.typeSort[i].sortKey;
           let needfcid=this.$store.state.type.leftNav[this.id].miniWallkey
           let Obj={
               fcid:needfcid,
                page:1,
                sort:sortkey,
                cKey:"h5-cube"
           }
        //    console.log(Obj)
           this.loadRightProduct(Obj);
        },
        seacrhMore(i){
           
            let link=this.$store.state.type.rightNav[i].link;

            let params = link.split("?")[1];
            params = params.split("&");
            for (let i = 0; i < params.length; i++) {
                const temp = params[i].split("=");
                if(temp[0]=="fcid"){
                    params = temp[1];
                    // return;
                    break;
                }
            }
            let fcid=params;
            let title=this.$store.state.type.rightNav[i].title;
            let Obj={
                fcid:fcid,
                title:title
            }
            this.$router.push({
                
                name:'SearchMore',
                params:{
                    Obj:Obj
               }
             })

            // let num1=link.indexOf('fcid=');
            // let num2=link.indexOf('&title=');
            // let num3=link.indexOf('&acm=')
            // let fcid=link.substring(num1+5,num2);
            // console.log("===>",fcid);
            // let title=link.substring(num2+7,num3);
            // let Obj={
            //     fcid:fcid,
            //     title:title
            // }
            // console.log(Obj)
            // console.log(link)
            // this.$router.push({
                
            //     name:'SearchMore',
            //     params:{
            //         Obj:Obj
            //     }
            // })
           
           
            
        }
        
    },
    mounted() {
        this.loadScrollleft();
        this.loadScrollright();
        this.loadTypeData();
        this.loadRightTypeData(41888);
        // let obj1={
        //     fcid:10062603,
        //     page:1,
        //     sort:1,
            
        // }
        this.loadRightProduct({fcid:10062603,
                page:1,
                sort:1,
                cKey:"h5-cube"});
               
        // this.changeRightNav(0);
     
    }
};
</script>
<style lang="less">
.TypeBody{
    position: absolute;
    top: 100px;
    bottom: 100px;
    width: 100%;
    .left-body {
        background: #f6f6f6;
        width: 25%;
        position: absolute;
        left: 0px;
        top: 0px;
        bottom: 0px;
        overflow: hidden;
        .wrapper {
            width: 100%;
            height: 100%;
            .left-body-nav {
                box-sizing: border-box;
                font-size: 30px;

                text-align: center;
                padding: 25px 0;
            }
        }
    }
    .right-body {
        width: 75%;
        position: absolute;
        right: 0px;
        top: 0px;
        bottom: 0px;
        overflow: hidden;
        .wrapper {
            width: 100%;
            height: 100%;
            .right-type-nav-box {
                width: 100%;
                padding: 30px;
                box-sizing: border-box;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }
        }
    }
}
.change {
    color: #fc5979;
    background: white;
    p {
        border-left: 10px solid #fc5979;
    }
}
.RightTypeNavSet{
    width: 160px;
    height: 200px;
    display: inline-block;
}
.ProductdisplayBox{
    width: 100%;
    border-top:1px solid #ccc;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.ProductdisplayNav{
    display: flex;
    justify-content: space-between;
    margin-bottom:10px;
}
.Productdisplay-Nav{
    width: 100%/3;
    
    font-size: 28px;/*px*/
    border-left:1px solid #cccccc;
    text-align: center;
    padding:10px auto;
}
.changeSort {
    
    p{
        border-left: 5px solid #fc5979;
    }
}
</style>
