# week5

## 课程安排
* ajax      
* nodejs    后端
* mysql     数据库

## day5-3

### 知识点
* markdown  一个比html还简单的标识语言

* 静态页面
    * 页面写死，内容固定，维护不方便

* 前端与后端
    * 前端：html+css+js
        * 页面
        ```html
            <!-- index.html -->
            <ul id="list">
                <li>data1</li>
                <li>data2</li>
                <li>data3</li>
                <li>data4</li>
            </ul>
        ```
        ```js
            let data = [
                'data1',
                'data2',
                'data3',
                'data4',
            ]
            const list = document.getElementById('list')

            // ['data1','data2'] -> ['<li>data1</li>','<li>data2</li>']
            const arr = data.map(item=>{
                return `<li>${item}</li>`
            })
            
            // ['<li>data1</li>','<li>data2</li>'] -> '<li>data1</li><li>data2</li>'
            const html = arr.join('')


            list.innerHTML = html;

            <ul id="list">

            </ul>
        ```

    * 后端（服务器）
        > 存放数据的地方

* ajax
    > 利用ajax技术向服务器请求数据到前端
    * 了解前端后端分离
    * 学会查看接口文档
    * 发起ajax请求的步骤
        > 必须通过服务器发起请求
        1. 创建一个异步请求对象
            ```js
                const xhr = new XMLHttpRequest()
            ```
        2. 设置请求参数，建立与服务器连接
            ```js
                xhr.open('get','url',true)
            ```
        3. 向服务器发送请求
            ```js
                xhr.send()
            ```
        4. 处理服务器响应数据
            ```js
                xhr.onload = function(){
                    // 在这里通过xhr.responseText获取
                }
            ```
        
    * 处理数据，并生产html结构

* 创建本地服务器
    > http-server实现本地服务器
    ```bash
        # 安装
        npm install -g http-server

        # 安装完成后通过http-server启动服务器
        http-server

        # 启动一个默认端口为8080的服务器
        # 接口服务器支持8080,8081,3000
        # 可以通过http://localhost:8080或http://127.0.0.1:8080访问
        # 如果想访问别人的电脑，必须知道对方的ip地址
    ```

* 同步与异步
    * 同步操作
        > 阻塞
    * 异步操作
        * setTimeout
        * setInterval
        * ajax
        * ...
* 请求传参
    * get: `?username=laoxie`

### 练习
* 请求接口数据，并渲染到页面
* 根据分类请求相应商品数据
* 点击商品进入详情页并展示商品效果

## day5-4

### 复习
* ajax
    * ajax请求步骤
* http请求
    * 客户端与服务端
        > 必须有客户端主动发起请求，服务器被动响应，响应完成后客户端与服务器自动断开
    * 请求request与响应response
        * request: 客户端发给服务端
        * response: 服务器发给客户端
* 同步与异步

### 知识点
* ajax请求封装
    * baseUrl
    * 回调函数callback
* 处理数据
* 页面跳转传参
    * url参数：?后的参数，格式：`?key=value`
        > string -> object
        * 传统操作
            1. 通过`location.search`获取url参数
            2. 通过&拆分每个参数
            3. 遍历每个参数，通过=拆分键值
            4. 把所有键值组合成一个对象
        * HTML5新特性：URLSearchParams
            ```js
                // ?id=603777f0883dee30b83facf3&a=10&b=20
                const params = new URLSearchParams(location.search)
                params.get('id'); //603777f0883dee30b83facf3

                // 思考一个问题：如果URLSearchParams是你封装的，你如何实现以上效果
            ```


* dataset: 自定义属性集合
    > 通过`节点.dataset`属性获取自定义属性集合

* Promise   承诺、许诺
    * 使用
        ```js
            // 实例化一个promise对象(状态：Pending)
            const promise = new Promise(function(resolve,reject){
                // resolve是一个函数: 用来改变promise的状态为Fulfilled
                // reject是一个函数：用来改变promise的状态为Rejected
                
                // 假设Promise为“爱你一辈子”
                // 如果白头偕老，就调用resolve()
                // 如果第二天就分手了，就调用reject()
            })
        ```
    * promise的状态
        > 状态只能从`Pending->Fulfilled`或Pending->Rejected，状态只要发生了改变时不可能在边回去
        * Pending（未完成）可以理解为Promise对象实例创建时候的初始状态
        * Fulfilled（成功） 可以理解为成功的状态
        * Rejected（失败） 可以理解为失败的状态
    * 原型方法
        * then(success,fail)
        * catch(fail)
    * 静态方法（类方法）
        * Promise.resolve()  创建一个状态为`Fulfilled`的promise对象
        * Promise.reject()   创建一个状态为`Rejected`的Promise对象
        * Promise.all([p1,p2,p3])    把多个promise对象包装成一个大的promise对象,大的promise对象的状态如下：
            * 所有的promise对象的状态都为Fulfilled时，大的promise状态为Fulfilled
            * 只要有一个promise对象的状态为rejected，则大的promise状态为rejected
        * Promise.race([p1,p2]): 竞速，谁跑的快，状态以谁为准
            ```js
                // 请求图片
                 function requestImg(){
                    return new Promise((resolve, reject)=>{
                        var img = new Image();
                        img.onload = function(){
                            resolve(img);
                        }
                        img.src = 'laoxie.jpg';
                    });
                }

                //延时函数，用于给请求计时
                function timeout(){
                    return Promise((resolve, reject)=>{
                        setTimeout(()=>{
                            reject('图片请求超时');
                        }, 5000);
                    });
                }

                Promise.race([requestImg(), timeout()])
                .then(function(result){
                    document.body.appendChild(result)
                })
                .catch(function(reason){
                    console.log(reason);
                });
            ```

* 匿名函数的执行
    ```js
        (function(){})()
    ```
* ES8新特性
    > async&await让我们以同步的写法实现异步操作
    * asyn
        > async函数返回一个promise对象，相当于以下代码
        ```js
            async function show(){
                return 'laoxie'
            }
            // 等效于以下代码
            function show(){
                return new Promise(resolve,reject){
                    resolve('laoxie')
                }
            }
        ```
    * await
        > 不能单独使用，只能在async函数中使用，用来等待promise对象的结果（换句话说，await后只能跟promise对象）

### 练习
* 根据数据渲染商品详情页面


## day5-5

### 面试题
* 为什么会出现乱码
    > 编码不统一造成乱码问题
    * ascii
    * latin
    * gb2312
    * gbk
    * unicode -> utf-8

### 复习
* ajax封装
    > 尽量让自己的封装方法功能单一化，需要考虑扩展性
    * 回调函数
        > 把函数作为参数传入其他函数中
        * 回调地狱
        ```js
            // 定义
            function ajax(url,callback){
                const xhr = new XMLHttpRequest()
                xhr.onload = function(){
                    const data = xhr.reponseText

                    callback(data)
                }
                xhr.open()
                xhr.send()

            }

            // 调用
            ajax('/test',function(data){
                // 业务

            })

            // 回调地狱1：第5个请求需要依赖前4个请求的数据才能发起请求
            // 可以使用Promise.all()解决这个问题
            ajax('/category',function(category){
                // 业务： 此处省略100行代码
                ajax('/goods',function(goodslist){
                // 业务： 此处省略300行代码
                    ajax(`/list`,function(data3){
                        ajax(url,function(data4){

                            
                            ajax(url,function(){

                            })
                        })
                    })
                })
            })

            // 回调地狱2：每个请求需要依赖前一个请求的数据
            // 解决方案：在每一个then方法中返回一个新的promise对象，实现then方法的链式调用（请看一下promise代码）
            ajax('/cagetory',(category)=>{
                ajax(`/goods?category=${category}`,(goodslist)=>{
                    ajax(url+goodslist.name,function(data3){
                        ajax(url+data3.name,function(){

                        })
                    })
                })
            })
        ```
    * Promise
        * Promise.all([p1,p2,p3,p4])
        ```js
            const p1 = new Promise((resolve,reject)=>{
                ajax('/category',function(category){
                    resolve(category)
                })
            })
            const p2 = new Promise((resolve,reject)=>{
                ajax('goods?category='+category.name,function(goodslist){
                    resolve(goodslist)
                })
            })
            //const p3 = ...
            //const p4 = ...

            // 第5个请求：需要依赖前4个请求的数据才能发起请求
            // 可以使用Promise.all()解决这个问题
            const p5 = Promise.all([p1,p2,p3,p4])
            p5.then((category,goodslist,data3,data4)=>{
                ajax(url,function(){

                })
            })

            // 每个请求需要依赖前一个请求的数据
            // 在每一个then方法中返回一个新的promise对象，实现then方法的链式调用
            new Promise((resolve,reject)=>{
                ajax('/category',function(category){
                    resolve(category)
                })
            }).then((category)=>{
                
                return new Promise((resolve,reject)=>{
                    ajax('goods?category='+category.name,function(goodslist){
                        resolve(goodslist)
                    })
                })

            }).then((goodslist)=>{
                 return new Promise((resolve,reject)=>{
                     ajax(url+goodslist.name,function(data3){
                         resolve(data3)
                     });
                })
            }).then((data3)=>{
                return new Promise((resolve,reject)=>{
                     ajax(url+goodslist.name,function(data4){
                         resolve(data4)
                     });
                })
            })
        ```
* Promise
* async & await
    > 用于简化Promise操作的代码
    ```js
        const category = await ajax('/category')
        const goodslist = await ajax('/goodslist?category='+category)
        // ...
    ```
* 

### 知识点
* NodeJS
    > 属于后端语言，基于ECMAScript
    * 前端javascript = ECMAScript + DOM + BOM

* 环境变量
* 模块化
    > 在NodeJS中把一个文件当作一个模块，每个模块的作用域是独立作作用域，如需要在其他模块中获取当前模块的数据，必须导出
    * 什么时模块化
        * 把一个大的功能拆分成若干小的功能
    * 为什么需要它(优点)
        * 分工
        * 维护
        * 复用
    * 规范
        * commonJS  nodejs采用的规范
        * ESModule  ES6推出的模块化规范
        * AMD       require.js（了解）
        * CMD       sea.js（了解）
    * 分类
        * 内置模块
            > NodeJS自带，直接引用
        * 自定义模块
        * 第三方模块
    * 使用
        * 引入
            ```js
                // commonJS
                require(url)
            ```
        * 导出
            ```js
                // commonJS
                module.exports
            ```
* 创建一个服务器
    * http-server实现一个服务器
    * 利用http模块创建一个服务器
        * request
        * response
            * writeHead()   设置响应头
                > 一个请求可以使用多次writeHead()
            * write()       设置响应内容
                > 一个请求可以使用多次write()
            * end()         接收响应
                > 一个请求只能使用一次end()
    * 连接服务器
        * 协议：http
        * 地址：ip地址/localhost/127.0.0.1
        * 端口：80
* 静态资源服务器
    * 依赖模块
        * http
        * fs
        * path
        * url / URLSearchParams / URL
    * 全局变量
        * __dirname ： 当前文件所在的目录
    * mime类型
        > 设置Content-Type属性
    * Buffer
        > 类似与数组的二进制数据类型
    * 状态码
        * 200+      成功
            * 200
        * 300+  
            * 301:重定向
            * 302:重定向
            * 304:缓存文件
        * 400+      客户端错误
            * 404:文件不存在
        * 500+      服务器错误
            * 500
* express
