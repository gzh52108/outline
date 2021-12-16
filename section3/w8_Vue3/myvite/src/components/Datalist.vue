<template>
    <div>
        <h4>Datalist</h4>
        <p @click="total++">total:{{total}}</p>
        <p @click="page++">page:{{page}}</p>
        <!-- <div>reactive-datalist:{{datalist.result}}</div> -->
        <div>ref-datalist:{{datalist}}</div>
        <div>datalist2:{{datalist2}}</div>
        <button @click="changeQty">qty:{{qty}}</button>
    </div>
</template>
<script>
import { reactive,ref,toRef,toRefs,computed,watch,watchEffect } from 'vue'
export default {
    // data(){
    //     console.log('data',this)
    //     return {
    //         total:100
    //     }
    // },
    // computed:{
    //     list2(){
    //         return this.datalist.map(item=>item*item)
    //     }
    // }
    // props:[],
    // beforeCreate(){
    //     console.log('beforeCreate',this)
    // },
    // created(){
    //     console.log('created',this)
    // },
    setup(){
        console.log('setup',this)

        // 功能A
        const data = reactive({total:100,page:1,size:10}); // reactiveObj = new Proxy()
        // const total = toRef(data,'total');
        // console.log('ref-total',total)
        const refData = toRefs(data)
        // console.log('refData',refData)
        
        // 不要尝试解构Proxy对象中的属性，会导致无法监听属性的操作
        // const {total,page} = data;
        console.log('data',data);
        watch(()=>data.total,(n,o)=>{
            console.log('watch data.total',n,o)
        })


        // 功能B
        // let datalist = reactive({
        //     result:[1,2,3]
        // })
        let datalist = ref([1,2,3]);// refObj = {value:new Proxy()}
        console.log('datalist',datalist)

        // ajax
        // request().then(({data})=>{
        //     datalist = data.data;
        // })
        setTimeout(()=>{
            console.log('timeout')
            // datalist.result = [10,20,30]
            datalist.value = [10,20,30]
        },2000)
        const datalist2 = computed(()=>{
            console.log('computed')
            return datalist.value.map(item=>item*item);
        })

        // 功能C
        const qty = ref(10); // {value:10}
        const changeQty = function(){
            qty.value++;
        }
        watch(qty,(n,o)=>{
             console.log('watch ref-qty',n,o)
        })

        return {
            data,

            // 转成ref对象后导出
            // total,

            // 把reactive对象中的所有属性转成ref对象
            ...refData,

            datalist,
            datalist2,

            qty,
            changeQty
        }
    },
    
}
</script>
<style scoped>

</style>