import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)


Vue.config.productionTip = false

new Vue({
  // 5. 把路由实例注入Vue
  router:router,
  render: h => h(App),
}).$mount('#app')
