<template>
  <img style="position:relative;z-index:100" alt="Vue logo" src="./assets/logo.png" />
  <div style="position:relative;z-index:100">{{msg}}</div>
  <button @click="changeCount">count:{{count}}</button>
  <p>
    <input type="text" v-model="msg" />
  </p>

  <!-- <Test v-model="count" v-model:count="count" />

  <List ref="mylist" @click="count++" @hello="count+=10" style="color:#f00" class="box" msg="hello" :index="10" /> -->

  <!-- <Datalist/> -->

  <!-- <Lifecycle/> -->
  <!-- <Table :data="datalist.list" :total="datalist.total" style="position:relative;z-index:10"/> -->
  <ScriptSetup a="10" :b="20"/>
</template>
<script>
import {ref,reactive} from 'vue'
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
    return {
      msg,
      count,
      changeCount,
      datalist
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
