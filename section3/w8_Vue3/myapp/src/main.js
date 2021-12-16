import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
.use(router)
.use(store)

// // 定义组件
// app.component()
// // 定义指令
// app.directive()
// // 定义mixin
// app.mixin()

const vm = app.mount('#app') ;// 返回根组件实例


// vue2
// const vm = new Vue({
//     router,
//     store,
//     render(h){
//         return h(App)
//     }
// }).$mount('#app')

// // 定义组件
// Vue.component()
// // 定义指令
// Vue.directive()
// // 定义mixin
// Vue.mixin()