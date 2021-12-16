<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>{{msg}}</div>
  <button @click="changeCount">count:{{count}}</button>
  <p>
    <input type="text" v-model="msg" />
  </p>

  <!-- <Test v-model="count" v-model:count="count" />

  <List ref="mylist" @click="count++" @hello="count+=10" style="color:#f00" class="box" msg="hello" :index="10" /> -->

  <Datalist/>
</template>
<script>
import Test from './components/Test.vue'
import List from './components/List.vue'
import Datalist from './components/Datalist.vue'
export default {
  // 选项式API
  data(){
    return {
      msg:'hello Vue3',
      count:1
    }
  },
  methods:{
    changeCount(){
      this.count++;
    }
  },
  components:{
    Test,
    List,
    Datalist
  },
  mounted(){
    // console.log('List',this.$refs.mylist)
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
