import Vue from 'vue'
// 1. 安装vue-router
// 2. 引入vue-router
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Reg from '../views/Reg.vue'
import Discover from '../views/Discover.vue'
import Cart from '../views/Cart.vue'
import Mine from '../views/Mine.vue'
import Search from '../views/Search.vue'
import Goods from '../views/Goods.vue'

// 3. 安装路由插件
Vue.use(VueRouter)
// 4. 实例化路由，并配置参数
const router = new VueRouter({
  routes:[
    // 当浏览器地址为/home时，渲染Home组件的内容
    {
      path:'/home',
      component:Home
    },
    {
      path:'/reg',
      component:Reg
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/discover',
      component:Discover
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/mine',
      component:Mine
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/goods/:id',
      component:Goods,
      name:'Goods'
    },
  ]
})

console.log('router',router);

export default router;