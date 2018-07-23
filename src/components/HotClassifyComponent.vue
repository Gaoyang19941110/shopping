<template>
    <div class="HotClassifyComponent">
        <div><img :src="image" alt=""></div>
        <span>{{title}}</span>
    </div>
</template>
<script>
export default {
    props:{
        image:null,
        title:null,
        
    }
};
</script>
<style lang="less">
// .HotClassifyComponent1,
// .HotClassifyComponent2,
// .HotClassifyComponent3,
// .HotClassifyComponent4 {
//     div {
//         border-radius: 100%;
//     }
// }
.HotClassifyComponent {
    display: inline-block;
    width: 160px;
    /* outline: 1px solid; */
    font-size: 24px; /*px*/
    text-align: center;
    margin-bottom: 20px;
    div {
        margin: 10px auto;
        width: 120px;
        height: 120px; /*px*/
        img{
             width: 120px;
        height: 120px; /*px*/
        }
    }
}
</style>

