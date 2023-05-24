<template>
     <tab-bar>
      <tab-bar-item path="/home" activeColor="orange">
        <!-- <img slot="item-icon" src="~@/assets/img/tabbar/home.png" alt=""> -->
        <img slot="item-icon" src="~@/assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="~@/assets/img/tabbar/home_active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="orange">
        <img slot="item-icon" src="~@/assets/img/tabbar/search.png" alt="">
        <img slot="item-icon-active" src="~@/assets/img/tabbar/search_active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="orange">
        <img slot="item-icon" src="~@/assets/img/tabbar/cart.png" alt="">
        <img slot="item-icon-active" src="~@/assets/img/tabbar/cart_active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="orange">
        <img slot="item-icon" src="~@/assets/img/tabbar/profile.png" alt="">
        <img slot="item-icon-active" src="assets/img/tabbar/profile_active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
 </template>
  
  <script>
import TabBar from "../../common/tabbar/TabBar"//"@/components/common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";
  export default {
    name: 'MainTabBar',
    data () {
      return {
        
      }
    },
    components:{
        TabBar,
        TabBarItem
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>