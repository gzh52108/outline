const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express();

// 服务器压缩：gzip
const compression = require('compression');
app.use(compression());

app.use(express.static('../public'))

app.use('/api',()=>{})

app.use(function(req,res){
    //除静态资源与数据接口外所有的请求，都响应index.html
    fs.readFile(path.resolve('./public/index.html'),(err,content)=>{
        console.log('content',content)
        res.set({
            'Content-Type':'text/html;charset=utf-8'
        })
        res.send(content)
    })
})

app.listen(2108,()=>{
    console.log('server is running')
})