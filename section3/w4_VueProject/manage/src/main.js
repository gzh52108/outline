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

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
