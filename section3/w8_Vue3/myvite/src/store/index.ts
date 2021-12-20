// vue2中使用vuex
// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)

// const store = new Vuex.Store({
//     state:{},
//     getters:{},
//     mutations:{},
//     actions:{},
//     modules:{}
// })

//vue3中使用vuex
import {createStore} from 'vuex'

interface IUser{
    id:number | string
    username:string
    role:string
}

interface IState{
    userInfo:IUser
}

const store = createStore<any>({
    state:{
        userInfo:{
            id:1,
            username:'laoxie',
            role:'admin'
        },
        a:10,
    },
    getters:{
        isLogin(state){
            return !!state.userInfo.id
        }
    },
    mutations:{
        login(state,payload){
            state.userInfo = payload
        },
        logout(state,payload){
            state.userInfo = {}
        },
    }
})

export default store