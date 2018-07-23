import jsonpUtil  from '../util/jsonpUtil';

// 对于远端数据的加载
// 常量应该是一个统一的数据服务地址
const mce = "https://mce.mogucdn.com/jsonp/";
const mce2="https://list.mogujie.com/search";
const mce3="https://rate.mogujie.com/h5/rate/jsonp/x6.rate.ratelist/v1"
const mce4="https://list.mogujie.com/module/mget";
export default {
    // 数据的具体请求方法

    /**
     * 根据参数 pids 查询 相关数据
     * @param pids:string
     * @param pid:string
     */
    loadDatasByPids(params){
        let url = mce+"multiget/3";
        return jsonpUtil.request(url,params);
    },
    loadDatasByUrl(params){
        
        return jsonpUtil.request(mce2,params);
    },
    loadDatasByPid(params){
        let url=mce+"makeup/3";
        return jsonpUtil.request(url,params);
    },
    loadDatasByObj(Obj){
        return jsonpUtil.request(mce2,Obj)
    },
    loadDatasByItemId(params){
        return jsonpUtil.request(mce3,params)
    },
    loadHotSearchDatasByParams(params){
        return jsonpUtil.request(mce4,params)
    },
    
    

    



}