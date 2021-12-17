<template>
    <div>
        msg:{{msg}}
        <p @click="count++">count:{{count}}</p>
        <button @click="changeCount">change count</button>
        <List/>
    </div>
</template>
<script>
// import List from './List.vue'
export default {
    // props:[''],
    // setup(props,context){
    //     const msg = 'hello setup'

    //     return {
    //         msg
    //     }
    // },
    // components:{
    //     // List
    // }
}
</script>

<!-- Script setup -->
<script setup>
    import {ref} from 'vue'
    import List from './List.vue'
    const msg = 'hello script setup'
    const count = ref(10);
    const changeCount = function(){
        count.value++
    }

    // 获取props
    const props = defineProps({
        a:String,
        b:[Number,String]
    })
    console.log('props',props)

    defineEmits(['click'])

    // 定义对外暴露属性
    // script setup
    defineExpose(['count','changeCount'])

    // 直接使用await
    await request.get('/list')
</script>