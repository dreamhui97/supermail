
import Vuex from 'vuex'

import {
    INCREMENT,
} from './mutations-types'

const moduleA = {
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
};

const store = new Vuex.Store({
    state:{
        counter:1000,
        students:
            [
                {id:12,name:'ss',age:12},
                {id:13,name:'ss',age:13},
                {id:22,name:'ss',age:22},
                {id:23,name:'ss',age:23}
            ],
        info:{
            name:'zs',
            age:18,
            adress:'shanghai'
        } 
    },
    mutations:{
        [INCREMENT](state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        incrementCount(state,payload){
            //state.counter+=num;
            state.counter+=payload.num;
        },
        addStu(state,stu){
            state.students.push(stu);
        },
        updateInfo(state){
            //Vue.set(state.info,'age',19);
            delete state.info['age'];
            state.info.name='ww';
            console.log(state)
        }   
    },
     actions:{
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
     },
     getters:{
        powerCounter(state){
            return state.counter * state.counter;
        },
        more20stu(state){
            return state.students.filter((s) => {
                return s.age > 20;
            })
        },
        more20stuLength(state,getters){
            return getters.more20stu.length
        },  
        moreAgeStu(state){
            return function (age){
                return state.students.filter(s => s.age > age);
            }
        }
     },
     modules:{
       a:moduleA,

     }
})

export default store;