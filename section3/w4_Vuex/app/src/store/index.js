import Vue from 'vue'
import Vuex from 'vuex'

// 2. 安装vuex插件
Vue.use(Vuex)

// 实现数据持久化
let cartlist = localStorage.getItem('cartlist'); // null
try{
    cartlist = JSON.parse(cartlist) || [];
}catch(err){
    cartlist = []
}


// 3. 实例化一个数据仓库store
const store  = new Vuex.Store({
    // 核心配置
    // 全局状态
    state:{
        cartlist,
    },
    // mutations: 修改state的唯一方法
    mutations:{
        add(state,payload){
            state.cartlist.unshift(payload)

            // 写入本地存储
            localStorage.setItem('cartlist',JSON.stringify(state.cartlist))
        },
        // store.commit('changeqty',{_id,qty})
        changeqty(state,{_id,qty}){
            state.cartlist.forEach(item=>{
                if(item._id === _id){
                    item.qty = qty
                }
            })

            // 写入本地存储
            localStorage.setItem('cartlist',JSON.stringify(state.cartlist))
        }
    }
})

export default store;