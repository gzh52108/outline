# Express
>Express 是一个第三方模块，对原生模块封装了一套更灵活、更简洁的应用框架，其在 Node.js 环境的地位和作用好比 jQuery 在前端的地位和作用。使用 Express 可以快速地搭建一个完整功能的网站

> 官方文档：https://www.expressjs.com.cn/ 

### 安装
```bash
    npm install express
```

### 使用
```javascript
    //引入模块
    var express = require('express');

    //开启服务器
    var app = express();

    // 监听8080端口
    app.listen(8080, function(){
        console.log('Server running on http://localhost:8080');
    });
```
> 如果想让express发挥出更强大的功能，就得使用中间件了
    

### Express中间件(middleware)
>中间件是一个封装了某些处理数据功能的函数，在request或response调用之前执行，从本质上来说，一个Express应用其实就是在调用各种中间件

#### 使用中间件
> 格式：`app.use([path],...middlewares)`

#### 内置中间件：
* `express.static(root, [options])`
    > 基于 server-static 开发的中间件，负责托管 Express 应用内的静态资源，如：图片， CSS, JavaScript 等，一般用于实现静态资源服务器

    * root 参数指的是静态资源文件所在的根目录。
    * options 对象是可选的，支持以下属性：
        * maxAge

    ```javascript
        // express实现静态资源服务器
        app.use(express.static('./public'));
    ```
* `express.json()`
    > 格式化请求体中的json数据到`request.body`
* `express.urlencoded()`
    > 格式化请求体中的表单数据到`request.body`
* `express.Router()`
    > 模块化路由

#### 自定义中间件
> 格式为：`function(request,response,next){}`

* `request`: 请求对象Request
* `response`: 响应对象Response

* `next()`:next是一个方法，因为一个应用中可以使用多个中间件，而要想运行下一个中间件，那么上一个中间件必须运行
```js
    app.use((req,res,next)=>{
        // 任何请求都进入此中间件
    });

    app.use('/goods',(req,res,next)=>{
        //只有请求地址为/goods时才进入此中间件
    })
```

#### 常用第三方中间件
* `body-parser`：解析body中的数据到`request.body`
* `multer`：用于处理FormData数据（表单的 `enctype="multipart/form-data"`属性）
* `cookie-parser` ：解析客户端cookie中的数据到`request.cookies`
* `express-session` ：解析服务端生成的sessionid对应的session数据到`request.session`属性
* `http-proxy-middleware` : 服务器代理中间件


### 定义路由
* 接口规范：RESTful
    > 根据不同的请求类型与不同的路径实现不同的接口
    * 请求类型: post,delete,put,patch,get
    * 请求路径
* 获取请求参数
    * 通过url参数传递（get）：`request.query`
    * 通过请求体/formData传递（post）：`request.body`
    * 动态路由：`request.params`
    * 请求头：`request.get()`

#### GET请求
```javascript
    // 定义主页路由,当我们访问：`http://localhost:8080/`时触发
    app.get('/', function(request, response){
        response.send('首页');
    });

    //定义任意路由(如：cart) ，当我们访问：`http://localhost:8080/cart`时触发
    app.get('/cart', function(request, response){
        response.send('购物车页面');
    })

    //访问地址：http://localhost:8080/search?keyword=iphonX
    app.get('/search', function(request, response){
        var params = {
            username: request.query.keyword
        }
        response.send(params);
    });

    //访问地址：http://localhost:8080/goods/10086，
    app.get('/goods/:id', function(request, response){
        var params = {
            username: request.params.id
        }
        response.send(params);
    });
```

#### POST请求
>post 参数接收，可依赖第三方模块 `body-parser` 作为**express中间件**进行转换会更方便、更简单

* post传参：
    > 利用`body-parser`模块处理参数，并格式化到`req.body`对象

    * string：`bodyParser.urlencoded()`
    * json：`bodyParser.json()`
    ```javascript
        var bodyParser = require('body-parser');

        // 创建urlencoded 编码解析（把请求头content-type值为application/x-www-form-urlencoded时的数据格式化到request.body中）
        var urlencodedParser = bodyParser.urlencoded({ extended: false });

        // 创建json编码解析（把请求头content-type值为application/json时的数据格式化到request.body中）
        const jsonParser = bodyParser.json();

        app.post('/getUsers', urlencodedParser, jsonParser,function (request, response) {
            var params = {
                username: request.body.username,
                age: request.body.age
            }
        response.send(params);
        });
    ```

#### 跨域支持
> 把这个路由配置放在所有路由的前面，方便调用next操作

* 简单跨域
    > 只需设置`Access-Control-Allow-Origin:'*'`响应头即可


#### 代理服务器
代理服务器最关键和主要的作用就是请求转发，即代理服务器将实际的浏览器请求转发至目标服务器，

* 实现这个功能，关键就在下面两点：
    - 请求转发至目标服务器。
    - 响应转发至浏览器。

* 无论请求还是响应，转发有需要关注两个点：
    - 请求或响应头。
    >http请求是无状态的，我们使用session的方式验证用户权限，session等经常保存在cookie中，所以，头的转发是必须的。
    - 请求或响应实体数据。

* 利用http-proxy-middleware实现代理
    > webpack代理服务器使用的中间件

---

**【案例】**

* 利用express实现静态资源服务器
* 利用路由编写RESTful规范的数据接口

**【练习】**

* 编写符合RESTful规范的商品与用户CRUD接口
    > 只实现接口，不用具体实现