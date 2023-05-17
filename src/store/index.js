
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import modulea from '../store/modules/moduleA'


const moduleA = modulea;


const state = {
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
};


const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
       a:moduleA,
     }
})

export default store;