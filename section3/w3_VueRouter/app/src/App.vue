<template>
  <div id="app">
     
    <!-- 路由视图显示：用于渲染路由对应的组件 -->
    <router-view></router-view>

    <!-- <van-tabbar v-model="active" @change="changeMenu"> -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item 
      v-for="item in menu" 
      :key="item.path" 
      :icon="item.icon" 
      :to="item.path"
      :badge="item.path==='/cart' ? 5 : null"
      >
      {{item.text}}
      </van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      active:0,
      menu:[
        {
          path:'/home',
          text:'首页',
          icon:'wap-home-o'
        },
        {
          path:'/discover',
          text:'发现',
          icon:'eye-o'
        },
        {
          path:'/cart',
          text:'购物车',
          icon:'cart-o'
        },
        {
          path:'/mine',
          text:'我的',
          icon:'manager-o'
        },
      ]
    }
  },
  created(){
    // const index = this.menu.findIndex(item=>{
    //   return item.path === this.$route.path
    // })
    //   console.log('App',this.$route,index)
    //   this.active = index;
  },
  methods:{
    goto(url){
      // this.$router.push(url)
      this.$router.replace(url)
    },
    // changeMenu(index){
    //   console.log('index',index)
    //   const current = this.menu[index].path
    //   this.$router.push(current)
    // }
  }
}
</script>

<style>

</style>
