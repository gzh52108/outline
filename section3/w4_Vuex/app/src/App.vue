<template>
  <div id="app">
     
    <!-- 路由视图显示：用于渲染路由对应的组件 -->
    <router-view></router-view>

    <!-- <van-tabbar v-model="active" @change="changeMenu"> -->
    <van-tabbar v-model="active" route v-show="showTabbar">
      <van-tabbar-item 
      v-for="item in menu" 
      :key="item.path" 
      :icon="item.icon" 
      :to="item.path"
      :badge="item.path==='/cart' ? cartlist.length : null"
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
      showTabbar:true,
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
      ],
    }
  },
  computed:{
    cartlist(){
      return this.$store.state.cartlist;
    }
  },
  created(){
    
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
.price del{color:#666;margin-right: 5px;}
.price del::before{
    content:'￥'
}
.price span{color:#f00}
.price span::before{
    content:'￥'
}
</style>
