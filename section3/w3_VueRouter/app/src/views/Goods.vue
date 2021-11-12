<template>
    <div>
        <van-nav-bar
            :title="data.goods_name"
            left-text="返回"
            left-arrow
        >
            <template #left>
                <van-icon name="arrow-left" size="20" @click="$router.back()" style="margin-right:5px;" />
                <van-icon name="wap-home-o" size="20" @click="goto('/home')" />
            </template>
            <template #right>
                <van-icon name="share-o" size="20" />
            </template>
        </van-nav-bar>
        <van-image
            width="100%"
            :src="$request.baseUrl+data.img_url"
        />
        <h5>{{data.goods_name}}</h5>
        <p class="price">
            <del>{{data.price}}</del>
            <span>{{data.sales_price}}</span>
        </p>
        <!-- 测试数据 -->
        <!-- <div v-if="data.imgs">
            {{data.imgs[0]}}
        </div> -->

        <h4>{{data.category}}相关商品</h4>
            <van-row gutter="20">
                <van-col span="12" v-for="item in goodslist" :key="item._id" style="height:260px;">
                    <div style="text-align:center" @click="goto('/goods/'+item._id)">
                        <van-image
                            width="100"
                            height="100"
                            :src="$request.baseUrl+item.img_url"
                        />
                    </div>
                    <h5>{{item.goods_name}}</h5>
                    <p class="price">
                        <del>{{item.price}}</del>
                        <span>{{item.sales_price}}</span>
                    </p>
                </van-col>
            </van-row>

        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" dot />
            <van-goods-action-icon icon="cart-o" text="购物车" badge="5" @click="goto('/cart')" />
            <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
            <van-goods-action-button type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
    </div>
</template>
<script>
// import request from '../utils/request'
export default {
    name:'Goods',
    data(){
        return {
            data:{
                
            },
            goodslist:[]
        }
    },

    // watch 监听路由变化
    watch:{
        '$route.params.id':function(n,o){
            console.log(n,o)
            this.getData()
        }
    },

    created(){
        console.log('Goods',this)
        

        // 未封装
        // axios.get('http://120.76.247.5:2003/api/goods/'+id).then(({data})=>{
        //     console.log('data',data);// {code,data,msg}
        //     this.newlist = data.data;
        // })

        // 二次封装
        // request.get('/goods/'+id).then(({data})=>{
        //     console.log('goods',data)
        // })

        // 二次封装+原型链
        // this.$request.get('/goods/'+id).then(({data})=>{
        //     console.log('goods',data)
        //     this.data = data.data;

        //     // 请求相关商品
        //     this.$request('/goods',{
        //         params:{
        //             category:data.data.category,
        //             total:false,
        //             size:8
        //         }
        //     }).then(({data})=>{
        //         this.goodslist = data.data.filter(item=>{
        //             return item._id != this.data._id
        //         });

        //         if(this.goodslist.length > 6){
        //             this.goodslist = this.goodslist.slice(0,6)
        //         }
        //     })
        // });

        this.getData();


        // 隐藏Tabbar
        this.$parent.showTabbar = false


        
    },
    destroyed(){
        this.$parent.showTabbar = true;
    },
    methods:{
        goto(url){
            this.$router.push(url)
        },
        getData(){
            const {id} = this.$route.params;

            this.$request.get('/goods/'+id).then(({data})=>{
            console.log('goods',data)
            this.data = data.data;

            // 请求相关商品
            this.$request('/goods',{
                params:{
                    category:data.data.category,
                    total:false,
                    size:8
                }
            }).then(({data})=>{
                this.goodslist = data.data.filter(item=>{
                    return item._id != this.data._id
                });

                if(this.goodslist.length > 6){
                    this.goodslist = this.goodslist.slice(0,6)
                }
            })
        });
        }
    }
}
</script>
<style scoped>
.title{
    color:#f00
}
</style>