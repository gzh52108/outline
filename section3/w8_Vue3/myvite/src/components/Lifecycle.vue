<template>
    <div>
        <input type="text" ref="myinput">

    </div>
</template>
<script>
import {ref,reactive,onBeforeMount,onMounted,getCurrentInstance} from 'vue'
// import request from '../utils/request';
export default {
    setup(){
        
        // const instance = getCurrentInstance();// 等效于选项式Api中的this，但不能当前this的替代方案

        // 功能A
        const datalist = ref([])
        onBeforeMount(()=>{
            // request('/list').then(({data})=>{
            //     datalist.value = data.data;
            // })
        })

        // 功能B
        const newlist = ref([])
        onBeforeMount(()=>{
            // request('/list').then(({data})=>{
            //     newlist.value = data.data;
            // })
        })

        // ref对象的获取
        // Vue2: this.$refs.xxx
        const myinput = ref()
        onMounted(()=>{
            console.log('myinput',myinput.value)

        })

        return {
            myinput
        }
    }
}
</script>