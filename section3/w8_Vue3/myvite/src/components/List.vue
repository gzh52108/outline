<template>
    <div>
        <h4>List</h4>

        <button @click="$emit('hello')">触发hello事件</button>
        <button @click="$emit('click')">触发click事件</button>
    </div>
    <!-- <p v-bind="$attrs">多个根节点</p> -->
</template>
<script>
export default {
    inheritAttrs:false,
    data(){
        return {
            index:1,
            datalist:[],
            page:1,
            size:10
        }
    },
    // 限制组件实例对外可以访问的 property
    expose:['datalist','index'],

    // 指定不继承事件，只有通过$emit()才能触发（包括原生事件）
    emits:['click','hello'],

    methods:{
        getData(){

        }
    },
    created(){
        console.log('attrs',this.$attrs)
    }
}
</script>