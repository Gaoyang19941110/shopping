import api from '../../server/api'

const state={
    CommentBox:[],
}

const actions={
    loadComment({commit},params){
        api.loadDatasByItemId({
            type:"1",
            itemId:params,
            appPlat:"m"

        }).then(({data})=>{
            commit('setComment',data.list)
            
        })
    }
}
const mutations={
    setComment(state,data){
        state.CommentBox=data
    },
    
}
export default{
    state,
    actions,
    mutations,
}