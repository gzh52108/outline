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

function updateStorage(data){
    localStorage.setItem('cartlist',JSON.stringify(data))
}

// 3. 实例化一个数据仓库store
const store  = new Vuex.Store({
    // 核心配置
    // 全局状态
    state:{
        cartlist,
        userInfo:{}
    },
    getters:{
        totalPrice(state,getters){
            return state.cartlist.reduce((val,item)=>val+item.sales_price*item.qty,0)
            // return state.cartlist.reduce((val,item)=>{
            //     return val+item.sales_price*item.qty
            // },0)

        },
        isLogin(state){
            return !!state.userInfo.authorization;
        }
    },
    // mutations: 修改state的唯一方法
    mutations:{
        add(state,payload){
            state.cartlist.unshift(payload)

            // 写入本地存储
            updateStorage(state.cartlist)
        },
        // store.commit('changeqty',{_id,qty})
        changeqty(state,{_id,qty}){
            state.cartlist.forEach(item=>{
                if(item._id === _id){
                    item.qty = qty
                }
            })

            // 写入本地存储
            updateStorage(state.cartlist)
        },

        // 删除购物车商品
        // store.commit('remove',123)
        // store.commit('remove,{_id:123})
        remove(state,{_id}){
            if(!Array.isArray(_id)){
                _id = [_id]
            }
            state.cartlist = state.cartlist.filter(item=>!_id.includes(item._id));

            updateStorage(state.cartlist)
        },

        // 用户相关
        // store.commit('login',userInfo)
        login(state,payload){
            state.userInfo = payload;
        }
    }
})

export default store;