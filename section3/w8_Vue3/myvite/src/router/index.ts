// vue2中使用vue-router
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)
// const router = new VueRouter({
    // mode:'history',// hash
//     routes:[]
// })

import * as VueRouter from 'vue-router'

console.log('Vue-router',VueRouter)

// vue3中使用vue-router
import {createRouter,createWebHashHistory,createWebHistory} from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'

const router = createRouter({
    // hash路由：createWebHashHistory()
    // history路由：createWebHistory()
    history:process.env.NODE_ENV==='production' ? createWebHistory() : createWebHashHistory(),
    routes:[{
        path:'/home',
        component:Home
    },{
        path:'/login',
        component:Login
    }]
})

export default router