export default {
    // aUpdateInfo(context,payload){
    //     setTimeout(()=>{
    //         context.commit('updateInfo');
    //         console.log(payload.message);
    //         payload.success();
    //     },1000);
    // },
    //promise 写法
    aUpdateInfo(context,payload){
        return new Promise((resolve,reject) =>{
            setTimeout(()=>{
                context.commit('updateInfo');
                console.log(payload);
                resolve('异步调用已完成');
            },1000);
        })
    },
 }