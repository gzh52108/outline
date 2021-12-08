const path = require('path')

// 老版本那写法
// const { injectBabelPlugin } = require('react-app-rewired');
// module.exports = function override(config, env) {
//     // 这里的代码在项目启动时执行，并传入webpack配置：config
    
//     // 修改配置
//     config.resolve.alias['@'] = path.join(__dirname,'./src/')

//     config = injectBabelPlugin([
//         "@babel/plugin-proposal-decorators", { "legacy": true }
//     ], config);

//     return config;
// }


// 新版写法
const {override,addDecoratorsLegacy,disableEsLint,useBabelRc,fixBabelImports} = require('customize-cra');

 module.exports = override(
     // 装饰器支持
    //  addDecoratorsLegacy(), 

     // antd按需加载：babel-plugin-import
    //  fixBabelImports('import',{ libraryName: "antd", style: "css" }),

     // 禁用ESLint
     disableEsLint()
 )