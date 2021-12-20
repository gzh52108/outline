<template>
    <div>Home</div>
    <p>userInfo:{{userInfo}}</p>
    <p>登录状态：{{isLogin}}</p>
    <button @click="logout">logout</button>

    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>

    <p>小图标：</p>
    <el-icon color="#f00" :size="100" style="font-size:30px;">
      <edit></edit>
    </el-icon>

    <share style="width: 1em; height: 1em; margin-right: 8px;" />
</template>

<script>
// import {Edit} from '@element-plus/icons-vue'
import {computed} from 'vue'
import {useStore,mapState,mapGetters} from 'vuex'
import {useRoute} from 'vue-router'
export default {
    // components:{
    //     Edit
    // },
    setup(){
        // 获取路由信息
        const route = useRoute();
        console.log('route',route)

        // 获取vuex数据
        const store = useStore()
        // const {userInfo} = store.state;
        // console.log('userInfo',userInfo)

        const userInfo = computed(()=>{
            return store.state.userInfo;
        })
        const isLogin = computed(()=>{
            return store.getters.isLogin;
        })

        const logout = ()=>{
            store.commit('logout');
        }

        return {
            userInfo,
            logout,
            isLogin
        }

    }
}
</script>