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


### 练习
* 根据数据渲染商品详情页面