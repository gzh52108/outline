import Vue from 'vue'
// 1. 安装vue-router
// 2. 引入vue-router
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

// 3. 安装路由插件
Vue.use(VueRouter)
// 4. 实例化路由，并配置参数
const router = new VueRouter({
  routes:[
    {
      path:'/',
      // 路由重定向
      redirect:'/login',
      // redirect:{name:'Home'}
    },
    
    // 第一层路由：显示再App.vue中的<router-view />中
    {
      path:'/login',
      component:Login,
    },
  ]
})

console.log('router',router);

// 全局路由守卫
router.beforeEach(function(to,from,next){
    console.log('beforeEach');
    // 判断进入的页面是否需要登录才可访问
    // if(['/cart','/mine'].includes(to.path)){
      if(to.meta.requireAuth){
      // 获取本地存储信息，判断是否登录
      let userInfo = localStorage.getItem('userInfo')
      try{
        userInfo = JSON.parse(userInfo) || {}
      }catch(err){
        userInfo = {}
      }
      if(userInfo._id){
        // 假设所有的用户都是好人,先放行，后校验
        // 如果用户已登录，则校验用户身份
        router.app.$request.get('/user/verify',{
          params:{
            username:userInfo.username
          },
          headers:{
            Authorization:userInfo.authorization
          }
        }).then(({data})=>{
          if(data.code === 401){
            localStorage.removeItem('userInfo')
            router.push({
              path:'/login',
              query:{
                // 用户访问的目标页面
                targetUrl:to.fullPath
              }
            })
          }
        })
        next()
      }else{
        router.push({
          path:'/login',
          query:{
            // 用户访问的目标页面
            targetUrl:to.fullPath
          }
        })
      }
    }else{

      next();
    }
})
// router.beforeResolve(function(to,from,next){
//     console.log('beforeResolve');
//     next();
// })
// router.afterEach(function(to,from){
//     console.log('afterEach');
// })

export default router;