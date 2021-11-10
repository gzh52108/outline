<template>
  <tr @click="selectItem(item.id)">
    <td><input type="checkbox" :checked="selectIds.includes(item.id)" /></td>
    <th scope="row">{{ idx + 1 }}</th>
    <td>{{ item.todo }}</td>
    <!-- <td v-once>{{formatDate(item.addtime)}}</td> -->
    <td>{{ date }}</td>
    <td>{{ item.done ? "是" : "否" }}</td>
    <td>
      <button
        class="btn btn-outline-primary btn-sm"
        v-on:click.stop="completeItem(item.id)"
      >
        {{ item.done ? "取消" : "完成" }}
      </button>
      <button
        class="btn btn-outline-danger btn-sm"
        v-on:click.stop="removeItem(item.id)"
      >
        删除
      </button>
    </td>
  </tr>
</template>
<script>
import Bus from './Bus'
export default {
  name: "TodoItem",
  props: ["item", "idx"],
  inject: ["selectItem", "selectIds"],
  computed: {
    date() {
      // console.log('computed.date')
      return new Date(this.item.addtime).toLocaleDateString();
    },
  },
  methods: {
    completeItem(id) {
      Bus.$emit("complete", id);
    },
    removeItem(id) {
      Bus.$emit("remove", id);
    },
    formatDate(d) {
      console.log("formatDate");
      return new Date(d).toLocaleDateString();
    },
  },
};
</script>
<style>
</style>