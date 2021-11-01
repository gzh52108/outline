const path = require('path')
const express = require('express');
const router = require('./router')


const app = express();

// 静态资源服务器
app.use(express.static('../public',{
    // index:'login.html',
    // 设置静态资源缓存时间
    maxAge:1000*60*60,
    // maxAge:'1d'
}))

// 数据接口（用于BSR）
app.use('/api',router)


const PORT = 2108;
app.listen(PORT,()=>{
    console.log('server is running at port ' + PORT)
})