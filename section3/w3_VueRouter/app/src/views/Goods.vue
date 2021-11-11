<template>
    <div>
        Goods
    </div>
</template>
<script>
export default {
    name:'Goods',
    data(){
        
        return {
            data:{}
        }
    },
    created(){
        console.log('Goods.$route',this.$route)
        const {id} = this.$route.params;

        console.log('id',id)
    }
}
</script>