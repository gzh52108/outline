<template>
    <div>
        <van-search v-model="keyword" placeholder="请输入搜索关键词" disabled @click="gotoSearch" />
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <div style="padding:10px">
            <h4>最新商品</h4>
            <van-row gutter="20">
                <van-col span="12" v-for="item in newlist" :key="item._id">
                    <div style="text-align:center" @click="gotoDetail(item._id)">
                        <van-image
                            width="100"
                            height="100"
                            :src="'http://120.76.247.5:2003'+item.img_url"
                        />
                    </div>
                    <h5>{{item.goods_name}}</h5>
                    <p class="price">
                        <del>{{item.price}}</del>
                        <span>{{item.sales_price}}</span>
                    </p>
                </van-col>
            </van-row>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
console.dir(axios);
export default {
    name:'Home',
    data(){
        return {
            keyword:'双11秒杀活动',
            newlist:[]
        }
    },
  created(){
    console.log('Home',this);

    // 请求最新商品
    axios.get('http://120.76.247.5:2003/api/goods',{
        // url参数
        params:{
            total:false
        },
        // request body
        data:{

        },
        // request header
        headers:{

        }
    }).then(({data})=>{
        console.log('data',data);// {code,data,msg}
        this.newlist = data.data;
    })
  },
  methods:{
      gotoSearch(){
          this.$router.push('/search?keyword='+this.keyword)
      },
      gotoDetail(id){
        //   this.$router.push('/goods/'+id)
        this.$router.push({
            name:'Goods',
            params:{
                id,
                a:10,
                b:20
            }
        })
      }
  }
}
</script>
<style scoped>
.my-swipe{
    height:120px;
    background-color:#cfcfcf;
}
.van-image{margin:0 auto}
.price del{color:#666;margin-right: 5px;}
.price del::before{
    content:'￥'
}
.price span{color:#f00}
.price span::before{
    content:'￥'
}
</style>