import {
    INCREMENT,
} from './mutations-types'


export default {
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
}