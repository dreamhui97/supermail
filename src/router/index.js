//配置路由器相关信息
import { createApp } from 'vue'
import App from '../App.vue'
//import Router from 'vue-router'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Home = () => import('../views/home/Home');
const Category = () => import('../views/category/Category');
const Cart = () => import('../views/cart/Cart');
const Profile = () => import('../views/profile/Profile');
//1、导入路由，安装路由功能。
const app = createApp(App);
//app.use(Router)
//2、创建路由对象    3、配置路由和组件之间的应用关系

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
    //component: ()  => import('@/views/home/Home.vue')
  },
  {
    path:'/category',
    component:Category
  },{
    path:'/cart',
    component:Cart
  },{
    path:'/profile',
    component:Profile
  },
  
  
];
const router = createRouter({
  routes,
  //mode:'history',
  history: createWebHistory(),
  //linkActiveClass:'active'
});


// //前置守卫(guard)
// router.beforeEach((to,from,next) =>{
//   //document.title = to.matched[0].meta.title;
//   //next();
// })
// //后置钩子
// router.afterEach((to,from) =>{
//   //document.title = to.matched[0].meta.title;  
// })
export default router;

//4、将路由挂载到Vue实例中