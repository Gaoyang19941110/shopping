import api from '../../server/api'
import { stat } from 'fs';


const state={
    hotSearch:[],histroySearch:[],searchList:[],searchMoreTypeSort:[]
}

const actions={
    loadHotSearchDatasByParam({commit}){
        api.loadHotSearchDatasByParams({
            platform:"H5",
            code:"hotWord,sketch"
        }).then(({data})=>{
            commit('setHotSearch',data.hotWord.data)
            commit('setHistroySearch',data.sketch.data)
        })
    },
    loadHotSearchDatasByQ({commit},params){
        api.loadDatasByUrl({
            q:params,
            cKey:'46',
            page:'1',
            sort:"pop|sell|new"
        }).then(({result})=>{
            commit('loadHotSearch',result.wall.docs)
            commit('searchMoreTypeSort',result.sortFilter)
        })
    },
    
}

const mutations={
    setHotSearch(state,data){
        state.hotSearch=data
    },
    setHistroySearch(state,data){
        state.histroySearch=data
    },
    loadHotSearch(state,data){
        state.searchList=data
    },
    searchMoreTypeSort(state,data){
        state.searchMoreTypeSort=data

    },
    loadSearcListhMoreBySort(state,data){
        state.searchMoreTypeSort=data

    },
}
export default{
    state,
    actions,
    mutations,
}