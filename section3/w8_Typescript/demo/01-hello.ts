// 声明一个变量，并限制类型为number
let price:number = 100;

// 类型检查：如在任意位置赋值的数据不符合变量类型，则在编译时抛出错误
// 如果使用支持ts的编辑器，直接在代码中提示错误（不需要编译）
price = '200'

price.toFixed()