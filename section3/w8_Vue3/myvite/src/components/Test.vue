<template>
    <div>
        <h4>Test</h4>
        modelValue:{{modelValue}}
        <p>count:{{count}}</p>
        <button @click="changeCount">子组件修改父组件数据</button>
    </div>
</template>
<script>
export default {
    props:['modelValue','count'],
    methods:{
        changeCount(){
            // this.$emit('update:model-value',this.modelValue+1)

            this.$emit('update:count',this.count+2)
        }
    }
}
</script>