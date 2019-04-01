import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


import Home from '@/components/Home'
import User from '@/components/User'
import Login from '@/components/Login'
import Reg from '@/components/Reg'
import Detail from '@/components/Detail'
import AppError from '@/common/AppError'

let routes=[
  {path:'/home',component:Home},
  {path:'/detail/:id',component:Detail},
  {path:'/user',component:User},
  {path:'/login',component:Login},
  {path:'/reg',component:Reg},
  {path:'/',redirect:'/home'},
  {path:'*',component:AppError}
];

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return {x:0,y:0}
  }
});

export default router;