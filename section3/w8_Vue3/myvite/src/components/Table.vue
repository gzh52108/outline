<template>
    <div>
        <h4>Table component</h4>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>商品名称</th>
                    <th>商品价格</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in datalist">
                    <td>{{index+1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>
                    <td>
                        <button @click="editItem(item)">编辑</button>
                        <button>删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <teleport to="body">
            <div class="popover" v-show="editable" >
                {{currentItem}}
                <button @click="close">关闭</button>
            </div>
        </teleport>
    </div>
</template>
<script>
import {ref} from 'vue'
export default {
    // attr,props
    props:{
        data:Array
    },
    components:{},
    setup(props,context){
        console.log('context',context)
        console.log('props',props);

        const datalist = ref([{
            id:1,
            name:'goods1',
            price:998
        },{
            id:2,
            name:'goods2',
            price:1998
        },{
            id:3,
            name:'goods3',
            price:2998
        }])

        const editable = ref(false)
        const currentItem = ref({})
        const editItem = (item)=>{
            editable.value = true;
            currentItem.value = item
        }
        const close = ()=>{
            editable.value = false;
            currentItem.value = {}
        }

        // expose([])
        return {
            datalist,
            editable,
            currentItem,
            editItem,
            close
        }
    },
}
</script>
<style scoped>
.popover{
    width:500px;
    height:300px;
    border:3px solid #ddd;
    padding:20px;
    position:fixed;left:50%;top:50%;z-index: 1000;
    transform: translate(-50%,-50%);
    background-color: rgba(255,255,255,0.9);
}
</style>