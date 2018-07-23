import jsonp from 'fetch-jsonp';

const parseParams = function(params){
    let paramsStr = "?";
    for (const key in params) {
        paramsStr += `${key}=${params[key]}&`;
        // paramsStr += key+"="+params[key]+"&";
    }
    return paramsStr.replace(/&$/,"");
}

export default {
    request(url,params={}){
        let paramsStr = parseParams(params);
        let resultPromise = jsonp(url+paramsStr).then((response)=>{
            return response.json();
        }).catch((error)=>{
            // 使用自定义的消息提示窗？
            console.log(error);
            return false;
        });

        return resultPromise;

    }
}