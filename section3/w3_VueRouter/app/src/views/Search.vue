<template>
    <div>
        <van-search v-model="keyword" placeholder="请输入搜索关键词" />
        Search List
    </div>
</template>
<script>
export default {
    name:'Search',
    data(){
        // console.log('Search.$route',this.$route)
        return {
            keyword:this.$route.query.keyword || ''
        }
    }
}
</script>