import Vue from 'vue'
import App from './App.vue'
// 1. 安装vue-router
// 2. 引入vue-router
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Reg from './views/Reg.vue'

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
  ]
})

console.log('main.router',router);


Vue.config.productionTip = false

new Vue({
  // 5. 把路由实例注入Vue
  router:router,
  render: h => h(App),
}).$mount('#app')
