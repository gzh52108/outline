import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as ElementIcons from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

import 'element-plus/dist/index.css'

console.log('ElementIcons',ElementIcons)


const app = createApp(App)
// .directive()
.use(router)
.use(store)
.use(ElementPlus)

// 注册小图标组件
for(let name in ElementIcons){
    app.component(name,(ElementIcons as any)[name])
}

app.mount('#app')


// Vue2
// new Vue({
//     el:'#app',
//     data:{

//     }
// })

// Vue3
// createApp({
//     data(){
//         return {}
//     }
// })