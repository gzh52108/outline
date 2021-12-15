const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:process.env.NODE_ENV === 'production' ? 'production' : 'development',


    entry:'./src/index.tsx',  

    output:{
        path:path.resolve('./dist'), // path.join(__dirname,'dist')
        filename:'boundle.[name].[hash:5].js'
    },

    resolve:{
        extensions:['.ts','.tsx','.js']
    },

    // 3. 加载器loader：告诉webpack如何处理文件（模块）
    module:{
        rules:[
           {
               test:/\.tsx?$/,
               loader:'ts-loader'
           }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
        }),

    ],

    // 5.测试服务器
    devServer:{
        static: {
            directory: path.join(__dirname, 'public'),
        },
    },
}