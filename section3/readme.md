# 三阶段

## day1-1:NodeJS

### 复习
* 静态资源服务器
    * 静态资源：html,css,js,img,...
    * 内置模块
        * http
        * url
        * path
        * fs


* http请求
    > 一个http请求，就是从一台设备访问另一台设备的过程
    * 客户端：client
    * 服务端: server
    * 一个完整的http请求
        > 只能从客户端发起请求，服务器被动响应，响应完成客户端与服务端断开连接（短连接）
        * 请求request：客户端->服务端
        * 响应response：服务端->客户端
    
* 模块化
    * 规范
        * commonJS      Nodejs(2009)
        * ES Module     ES6(2015)
        * AMD           require.js
        * CMD           sea.js
    * 分类
        * 内置模块
        * 自定义模块
        * 第三方模块
            > 安装到node_modules，引入方式与内置模块一致
    * 导入
        * require()
            > require一个目录，package.json{main} -> index.js
    * 导出
        * module.exports
        * exports

* express
    * 中间件middleware
    * 中间件分类
        * 内置中间件
            * express.static()
            * express.urlencoded()
            * express.json()
            * express.Router()
        * 自定义：`Function(request,response,next)`
        * 第三方中间件
    * 编写接口：RESTful规范
        * 请求类型：post,delete,put/patch,get
        * 传参
            * url 
                * search参数: ?name=value&name=value
                    > 接收：req.query
                * 动态路由
                    > 接收：req.params
            * request body请求体:
                > 接收：req.body
                * x-www-form-urlencoded: name=value&name=value
                * json
            * request header请求头
                > 接收：req.get()
                * cookie: cookie-parser
* 数据库：mysql
    * 命令行
    * 可视化工具
    * 在nodeJS中操作mysql
        * 驱动：mysql

### 知识点
* express
    * 模块化路由
        * express.Router()
    * 缓存
        * 强制缓存：200 from memory/disk cache
            > 文件还在缓存有效期内，浏览器会强制使用缓存
        * 协商缓存：304
            > 文件缓存有效期已过，浏览器发请求给服务器询问文件是否有修改
    * 跨域
        * 为什么会存在跨域限制(同源策略)：出于安全原因考虑，默认不允许跨域访问
        * 跨域解决方案
            * CORS
                * 简单跨域：`Access-Control-Allow-Origin`
                * 复杂跨域：
                    * `Access-Control-Allow-Origin`
                    * `Access-Control-Allow-Methods`
                    * `Access-Control-Allow-Headers`

## day1-2

### 复习
* 缓存
    * 强制缓存：200
    * 协商缓存: 304
* 跨域
    * CORS
        * 复杂跨域
### 知识点
* 跨域
    * CORS
    * JSONP: json with pending
        1. 定义全局函数
        2. 利用script标签发起请求，并传递全局**函数名**
            * script标签没有跨域限制
            * script标签请求必须得到js代码
        3. 服务器响应js代码
            * js代码为：执行**全局函数**，并传递数据
            ```html
                <script src="http://localhost:2108/js/home.js"></script>

                <script src="http://localhost:2108/api/jsonp"></script>
            ```
        * 缺点
            * 只能get请求
            * jsonp并不是ajax请求

    > JSONP与CORS都需要服务器的支持 

    * 服务器代理
        > http-proxy-middleware
* 页面渲染方式
    * 客户端渲染Browser Side Rendering(BSR)
        > 利用ajax请求数据，然后在客户端生成html结构的渲染方式
        * 前后端分离
        * 优点
            * 用户体验
            * 局部刷新
        * 缺点
            * SEO不友好
        * 请求步骤
            1. 请求空的html
            2. 请求js代码
            3. 发起ajax请求
            4. 渲染页面
    * 服务器渲染Server Side Rendering(SSR)
        > 在服务器生成html结构，然后返回给前端渲染
        * 优点
            * 有利于SEO
            * 速度快
        * 请求步骤
            1. 请求服务器，得到一个完整的html结构
            2. 渲染页面

    > 实际开发中的方案：首页采用SSR，其他页面采用BSR

    * 在NodeJS中如何实现
        * 客户端渲染
        * 服务端渲染
            * 模板引擎
                * ejs
                * jade/pug

### 练习
* 配合bootstrap完成goodslist与goods页面（SSR）
* 完成登录、注册（SSR）


## day1-3

### 复习
* 跨域解决方案
    * JSONP
    * CORS
    * 服务器代理
        * 正向代理
            > 代理服务器为客户端服务
        * 反向代理
            > 代理服务器为服务器服务器，反向代理用户一般无法感知代理服务器的存在
            * 负载均衡
* BSR与SSR
* 模板引擎
    * ejs
    * jade/pug

### 知识点
* 文件上传
    * 前端：发送
        > multipart/form-data
        * `<form enctype="multipart/form-data">`
        * FormData
            * set(name,value)
            * append(name,value)
            * delete(name)
            * get(name)
            * getAll(name)
    * 后端：接收
        > 使用multer模块格式化`multipart/form-data`类型数据，把文件数据格式化到`req.file`或`req.files`
* try...catch
    > 使用try...catch可以避免当代码出现错误时影响代码继续执行
    ```js
        try{
            // 尝试执行这里的代码

        }catch(err){
            // 如果以上代码有错误或promise对象的状态为Rejected则执行这里的代码
        }
    ```
* 加密/解密
    * 单向加密
        > 加密后不可解密
        * 加密算法
            * md5
            * sha1
            * sha256
            * sha512
            * ...
        * 缺点
            * 不能反向解密，但可以暴力破解
                > 解决方案：
                * 加盐
                * 多次加密
    * 双向加密
        > 密钥
        * 对称加密
            > 加密和解密公用一个密钥
        * 非对称加密
            > 公钥+私钥
    * crypto
        * createHash()
            * update(data)
            * digest('hex'|'base64')
    * 应用
        * https: ssl

        ```
            // 明文传输
            http://localhost:2108/index.html

            // 密文传输
            https://offer.qfh5.cn/home
        ```

## day1-4

### 复习
* 文件上传
    * 前端代码
        * `multipart/form-data`
        * FormData
            * set()
            * append()
        * base64
            > 把图片转成base64编码后再传到服务器
        ```html
            <!-- 表单 -->
            <form action method enctype>
                <input type="file" id="upload" multiple />
            </form>

            <!-- ajax -->
            const fdata = new FormData()
            xhr.send(fdata)
        ```
    * 后端代码
        > multer
        ```js
            const multer = require('multer')
            const upload = multer({dest or storage,fileFilter,limits})
        ```
* 加密解密
    * base64编码（65个合法字符：[a-zA-Z0-9/+=]）
    * 单向加密
    * 双向加密
        * 对称加密
        * 非对称加密（公钥+私钥）
    * NodeJS
        * crypto
        ```js
            // password -> password2
            123456 -> xxxxx

            // 加盐
            123456 ->abc->密文
            123456 ->cba->密文
        ```

### 知识点
* 数据库：Database
    * 关系型数据库
        * 概念
            * 表：table
            * 记录: row
        * 常用关系型数据库
            * Oracle
            * MySQL/MariaDB
            * SQL Server
            * PostgrcSQL
            * DB2
    * 非关系型数据
        * MongoDB
            * 集合: collection
            * 文档：document

* mongoDB
    ```js
        // user结合
        [
            {username:'吴亦凡',age:34,hobby:'唱歌'},
            {username:'李云迪',age:39,password:123456,tag:['钢琴家','xxx']},
            {username:'朗朗'},
        ]
    ```
    * 命令行操作
        * 操作数据库
        * 操作集合
        * 操作文档:CRUD
            * 增：
                * insertOne(document)
                * insertMany([document...])
            * 删：
                * deleteOne(query)
                * deleteMany(query)
            * 改
                * updateOne(query,newData)
                * updateMany(query,newData)
                * save(document)
                ```js
                    db.user.updateOne(
                        // 条件
                        {_id:ObjectId('617a0b183acc3b333384c09a')},
                        {
                            // 把username改成jingjing
                            $set:{username:'jingjing'},
                            // 把qty在原来的基础上+1
                            $inc:{qty:1},
                            // 给hobby数组添加"唱歌"
                            $push:{hobby:'唱歌'}
                            // 给hobby数组添加'唱歌'并自动去重
                            $addToSet:{hobby:'唱歌'}
                        }
                    )
                ```
            * 查：
                * find(query,project)
                * findOne(query,project)
        * 可视化工具

* Set集合
    ```js
        const myset = new Set(); // 与数组类似，能自动去重
        myset.add(10); // [10]
        myset.add(20)   // [10,20]
        myset.add(30) ; // [10,20,30]
        myset.add(10) ; // [10,20,30]
        myset.add('10') ; // [10,20,30,'10']
        myset.add({a:1,b:2}) ; // [10,20,30,'10',{a:1,b:2}]
        myset.add({a:1,b:2}) ; // [10,20,30,'10',{a:1,b:2},{a:1,b:2}]
    ```