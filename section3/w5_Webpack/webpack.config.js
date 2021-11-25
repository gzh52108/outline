const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 0.设置环境
    mode:'development',

    // 1.入口：用于告诉webpack从哪开始

    // 单入口文件：文件最终被编译成main.js
    entry:'./src/index.js',  

    // 入口文件最终被编译成login.js
    // entery:{
    //     login:'./src/index.js',
    // }

    // 多入口文件
    // entry:['./src/index.js','./src/login.js'],

    // 2.出口：告诉webpack编译后的文件信息与输出到哪里
    output:{
        path:path.resolve('./dist'), // path.join(__dirname,'dist')
    },

    // 3. 加载器loader：告诉webpack如何处理文件（模块）
    module:{
        rules:[
            // js加载器：babel-loader
            {
                // 匹配规则：匹配js文件
                test:/\.js$/,

                // 不需要对加载器进行配置时，可以直接使用加载器名称
                // use:'babel-loader', 
                
                use:{
                    loader:'babel-loader',
                    options:{
                        // 插件
                        // plugins:['@babel/plugin-proposal-class-properties'],

                        // 预设：插件集合
                        presets:['@babel/preset-react'],
                    }
                }
            },

            // css加载器：css-loader + style-loader
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },

            // sass加载器：sass-loader
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },

    // 4. plugins
    plugins:[
        // 创建index.html文件
        new HtmlWebpackPlugin({
            // 指定文件作为模板生成html文件
            template:'./public/index.html',
            // filename:'login.html', // 默认为index.html
        })
    ],

    // 5.测试服务器
    devServer:{
        static: {
            directory: path.join(__dirname, 'public'),
        },
    }
}