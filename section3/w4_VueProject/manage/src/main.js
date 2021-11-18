import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import request from './utils/request'

// 完整引用
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// 安装插件：注册60+全局组件，给Vue原型添加常用方法
Vue.use(elementUI);

// 按需引入
// import Button from 'element-ui/lib/button'
// import 'element-ui/lib/theme-chalk/button.css'
// Vue.use(Button)

// 使用 babel-plugin-component 工具实现按需引入
// import {Message,Button,Table,Form,FormItem,Input,Checkbox,Container,Main,Aside,Header,Row,Col} from 'element-ui'
// Vue.use(Button)
// Vue.use(Table)
// Vue.use(Form)
// Vue.use(FormItem)
// Vue.use(Input)
// Vue.use(Checkbox)
// Vue.use(Container)
// Vue.use(Main)
// Vue.use(Aside)
// Vue.use(Header)
// Vue.use(Row)
// Vue.use(Col)

// Vue.prototype.$message = Message;
Vue.prototype.$request = request;

Vue.config.productionTip = false


// 全局路由守卫
router.beforeEach(function (to, from, next) {
  console.log('beforeEach');
  // 访问后台页面都需要用户登录才能访问
  if (to.path.startsWith('/manage')) {
    // 判断是否登录
    if (store.getters.isLogin) {
      // 假设所有的用户都是好人,先放行，后校验
      // 如果用户已登录，则校验用户身份
      router.app.$request.get('/user/verify', {
        params: {
          username: store.state.userInfo.username
        }
      }).then(({ data }) => {
        if (data.code === 401) {
          store.dispatch('logout')
          router.push({
            path: '/login',
            query: {
              // 用户访问的目标页面
              targetUrl: to.fullPath
            }
          })
        }
      })
      next()
    } else {
      router.push({
        path: '/login',
        query: {
          // 用户访问的目标页面
          targetUrl: to.fullPath
        }
      })
    }
  } else {

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

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
