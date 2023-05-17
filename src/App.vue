<template>
<h2>hellow world</h2>
<h2></h2>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import store from './store'
import {
  INCREMENT
} from './store/mutations-types'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      msg:'message',

    }
    
  },
  methods:{
    addition(){
      this.$store.commit(INCREMENT);
    },
    subtraction(){
      this.$store.commit('decrement');
    },
    addCount(num){
      //this.$store.commit('incrementCount',num)
      this.$store.commit({
        type:'incrementCount',
        num
      })
    },
    addStu(){
      this.$store.commit('addStu',{id:122,name:'王五',age:31});
    },
    updateInfo(){
      // this.$store.dispatch('aUpdateInfo','message');
      // this.$store.dispatch('aUpdateInfo',{
      //   message:'参数',
      //   success:() =>{
      //     console.log('异步调用已完成');
      //   },
      // });

      //Promise 写法
      this.$store.dispatch('aUpdateInfo','message').then((ret)=>{
        console.log(ret);
      });
    },
    updateName(){
      this.$store.commit('updateName','lisi'); 
    },
    asyncUpdateName(){
      this.$store.dispatch('aUpdateName','wangwu');
    }
  }
}
</script>

<style>

</style>
