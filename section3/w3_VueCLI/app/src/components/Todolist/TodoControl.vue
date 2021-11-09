<template>
    <div class="text-end">
        <button class="btn btn-primary btn-sm" @click="completeItems">批量完成</button>
        <button class="btn btn-danger btn-sm" @click="removeItems">批量删除</button>
    </div>
</template>
<script>
export default {
    name:'TodoControl',
    props:['removeItems','completeItems'],
}
</script>
<style>

</style>