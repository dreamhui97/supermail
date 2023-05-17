export default {
    state:{
        name:'zhangsan',

    },
    mutations:{
        updateName(state,payload){
            state.name = payload;
        },
    },
    actions:{
        aUpdateName(context,payload){
            setTimeout(()=>{
                context.commit('updateName',payload);
            },1000);
        }
    },
    getters:{
        fullname(state){
            return 'hellow'+state.name
        },
        fullname2(state,getters){
            return getters.fullname+"2";
        },
        fullname3(state,getters,rootState){
            return getters.fullname2 + rootState.counter;
        }
    }
}