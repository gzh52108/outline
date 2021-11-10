<template>
    <div>
        Vue的生命周期
        <button @click="counter++">counter:{{counter}}</button>
    </div>
</template>
<script>
export default {
    name:'Lifecycle',
    data(){
        return {
            counter:1
        }
    },

    beforeCreate(){
        console.log('beforeCreate')
    },
    created(){
        console.log('created')
    },
    beforeMount(){
        console.log('beforeMount')
    },
    mounted(){
        console.log('mounted')
    },


    beforeDestroy(){
        console.log('beforeDestroy')
    },
    destroyed(){
        console.log('destroyed')
    },
}
</script>