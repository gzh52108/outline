<template>
  <img style="position:relative;z-index:100" alt="Vue logo" src="./assets/logo.png" />
  <div style="position:relative;z-index:100">{{msg}}</div>
  <button @click="changeCount">count:{{count}}</button>
  <p>
    <input type="text" v-model="msg" />
  </p>

  <p :class="$style.box">$style: {{$style}}</p>
  <p :class="laoxie.mybox">laoxie: {{laoxie}}</p>

  <p class="color" @click="changeColor">动态改变字体大小</p>


  <!-- <Test v-model="count" v-model:count="count" />

  <List ref="mylist" @click="count++" @hello="count+=10" style="color:#f00" class="box" msg="hello" :index="10" /> -->

  <!-- <Datalist/> -->

  <!-- <Lifecycle/> -->
  <!-- <Table :data="datalist.list" :total="datalist.total" style="position:relative;z-index:10"/> -->
  <ScriptSetup class="menu" a="10" :b="20"/>
  <!-- <div data-v-hash class="menu">
        msg:{{msg}}
        <p @click="count++">count:{{count}}</p>
        <button @click="changeCount">change count</button>
        <List/>
    </div> -->

    <router-view></router-view>
</template>
<script>
import {ref,reactive,useCssModule} from 'vue'
import Test from './components/Test.vue'
import List from './components/List.vue'
import Datalist from './components/Datalist.vue'
import Lifecycle from './components/Lifecycle.vue'
import Table from './components/Table.vue'
import ScriptSetup from './components/ScriptSetup.vue'
export default {
  // 选项式API
  // data(){
  //   return {
  //     msg:'hello Vue3',
  //     count:1
  //   }
  // },
  // methods:{
  //   changeCount(){
  //     this.count++;
  //   }
  // },
  components:{
    Test,
    // List,
    Datalist,
    Lifecycle,
    Table,
    ScriptSetup
  },

  // 组合式API
  setup(){
    const msg = ref('hello Vue3')

    const count = ref(1)
    const changeCount = ()=>{
      this.count++;
    }

    // datalist
    const datalist = reactive({
      list:[10,20,30],
      total:100
    })

    const styles = useCssModule();
    const laoxieStyles = useCssModule('laoxie');
    console.log('styles',styles,laoxieStyles)
    // return Vue.h('div',{attrs:{class:styles.box}})

    // 动态改变字体大小
    const color = ref('12px')
    const changeColor = ()=>{
      color.value = '20px';
    }
    return {
      msg,
      count,
      changeCount,
      datalist,
      color,
      changeColor
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style scoped>
  /* 
  1. 给当前组件所有标签添加 data-v-[hash] 属性
    <div class="box"></div> -> <div class="box" data-v-hash></div>
  2. 把当前样式添加属性选择器  
    .box{} -> .box[data-v-hash]{}
*/

/* .menu button -> .menu[data-v-hash] button[data-v-hash] */
.menu button{ 
  color:#58bc58;
}
/* 
  解决方案 
    * >>> :  .menu >>> button{} -> .menu[data-v-hash] button{}
    * /deep/ : .menu /deep/ button{} -> .menu[data-v-hash] button{}
    * :deep() 深度伪类选择器
      .menu :deep(button) -> .menu[data-v-hash] button{}
*/
.menu :deep(button){ 
  color:#58bc58;
}

.color{
  font-size:v-bind(color);
}
</style>

<style module>
  .box{color:#58bc58;}
</style>
<style module="laoxie">
  .mybox{color:#f00;}
</style>