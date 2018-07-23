import api from '../../server/api'

const state={
    warpImg:[],
    blocks:[],
    sales:[],
    Hotclassfy:[],
    Likes:[]
}

const actions={
    loadHomeData({commit}){
        api.loadDatasByPids({
            appPlat:'m',
            pids:"51822,106930,51833,51836"
        }).then(({data})=>{
            commit("setwarpImg",data[51822].list);
            commit("setblocks",data[106930].list);
            commit("setsales",data[51833].list);
            commit("setHotclassfy",data[51836].list);
            
        })
    },
    loadGuessYouLike({commit}){
        api.loadDatasByUrl({
            sort:'pop',
            pid:"9750",
            cKey:46

        }).then(({result})=>{
            commit("setLikes",result.wall.docs)
        })
    }
}

const mutations={
    setwarpImg(state,data){
        state.warpImg=data
    },
    setblocks(state,data){
        state.blocks=data
    },
    setsales(state,data){
        state.sales=data
    },
    setHotclassfy(state,data){
        state.Hotclassfy=data
    },
    setLikes(state,data){
        state.Likes=data
    }
}
export default{
    state,
    actions,
    mutations,
}