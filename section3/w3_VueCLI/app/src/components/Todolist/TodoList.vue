<template>
  <div class="container">
    <todo-form :add="addItem" v-on:additem="addItem" ref="todoForm"></todo-form>
    <todo-control
      :completeItems="completeItems"
      :removeItems="removeItems"
    ></todo-control>
    <todo-content :list="datalist"></todo-content>
    <todo-footer :list="datalist"></todo-footer>
  </div>
</template>
<script>
import TodoForm from "./TodoForm.vue";
import TodoControl from "./TodoControl.vue";
import TodoContent from "./TodoContent.vue";
import TodoFooter from "./TodoFooter.vue";

// 引入样式
import 'bootstrap/dist/css/bootstrap.css'
import Bus from './Bus'

export default {
  name: "TodoList",
  data() {
    Bus.$on('remove',this.removeItem)
    Bus.$on('complete',this.completeItem)
    return {
      selectIds: [],
      datalist: [
        {
          id: 1,
          todo: "定个小目标，全球旅行",
          done: true,
          addtime: Date.now(),
        },
        {
          id: 2,
          todo: "赚他一个亿津巴布韦币",
          done: false,
          addtime: Date.now() + 3600 * 1000,
        },
        {
          id: 3,
          todo: "迎娶白富美，达到人生巅峰",
          done: false,
          addtime: Date.now() + 3600 * 1000 * 5,
        },
      ],
    };
  },
  provide:function(){
    return {
        selectItem:this.selectItem,
        selectIds:this.selectIds,
        selectAll:this.selectAll
    }
},
  components: {
    TodoForm,
    TodoControl,
    TodoContent,
    TodoFooter,
  },
  methods: {
    addItem(todo) {
      const newData = {
        id: parseInt(Math.random() * 10000),
        // 需要输入框中的内容
        todo,
        done: false,
        addtime: Date.now(),
      };
      this.datalist.unshift(newData);
    },
    completeItem(id) {
      this.datalist.forEach((item) => {
        if (item.id === id) {
          item.done = !item.done;
        }
      });
    },
    removeItem(id) {
      this.datalist = this.datalist.filter((item) => item.id !== id);
    },
    selectItem(id) {
      console.log("id=", id);
      if (!this.selectIds.includes(id)) {
        this.selectIds.push(id);
      } else {
        // this.selectIds = this.selectIds.filter(item=>item!=id)
        // [1,20,3],[{},{}]
        const idx = this.selectIds.findIndex((item) => item === id);
        this.selectIds.splice(idx, 1);
      }
    },
    selectAll(all) {
      if (all) {
        // 由于是通过provide/inject传入的值，所以一下写法达不到响应式的效果
        // this.selectIds = this.datalist.map(item=>item.id)
        const ids = this.datalist.map((item) => item.id);
        this.selectIds.splice(0, this.selectIds.length);
        this.selectIds.push(...ids);
      } else {
        this.selectIds.splice(0, this.selectIds.length);
      }
    },
    // 批量完成
    completeItems() {
      this.datalist.forEach((item) => {
        if (this.selectIds.includes(item.id)) {
          item.done = true;
        }
      });
    },
    removeItems() {
      this.datalist = this.datalist.filter((item) => {
        return !this.selectIds.includes(item.id);
      });
    },
  },
};
</script>
<style>
</style>