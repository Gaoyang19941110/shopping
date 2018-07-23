import api from '../../server/api'

const state={
    leftNav:[],rightNav:[],rightProduct:[],typeSort:[],searchMore:[],searchMoreTypeSort:[],

}

const actions={
    loadTypeData({commit}){
        api.loadDatasByPids({
            appPlat:'m',
            pids:'41789'
        }).then(({data})=>{
            commit('setleftNav',data[41789].list)
        })
    },
    loadRightTypeData({commit},params){
        
        api.loadDatasByPid({
            appPlat:'m',
            pid:params
        }).then(({data})=>{
            commit('setrightNav',data.categoryNavigation.list)
        })
    },
    loadRightProduct({commit},Obj){
        api.loadDatasByObj({
            fcid:Obj.fcid,
            page:Obj.page,
            sort:Obj.sort,
            cKey:Obj.cKey
        }).then(({result})=>{
            commit('setrightProduct',result.wall.docs);
            commit('settypeSort',result.sortFilter);
        })
    },
    loadSearchMore({commit},Obj){
        api.loadDatasByObj({
            fcid:Obj.fcid,  
            title:Obj.title,
            cKey:"16",
            sort:"pop",
            page:"1"
        }).then(({result})=>{
            commit('setsearchMore',result.wall.docs)
            commit('searchMoreTypeSort',result.sortFilter)
        })
        
    },
    loadSearchMoreBySort({commit},Obj){
        api.loadDatasByObj({
            fcid:Obj.fcid,  
            title:Obj.title,
            cKey:"16",
            sort:Obj.sortKey,
            page:"1"
        }).then(({result})=>{
            commit('setsearchMore',result.wall.docs)
       
        })
        
    }
} 
            
      

const mutations={
    setleftNav(state,data){
        state.leftNav=data
    },
    setrightNav(state,data){
        state.rightNav=data
    },
    setrightProduct(state,data){
        state.rightProduct=data
    },
    settypeSort(state,data){
        state.typeSort=data
    },
    setsearchMore(state,data){
        state.searchMore=data
    },
    searchMoreTypeSort(state,data){
        state.searchMoreTypeSort=data
    }
}

export default{
    state,
    actions,
    mutations,
}