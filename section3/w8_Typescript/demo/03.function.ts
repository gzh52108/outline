/*
    函数类型
    * 声明式
    * 赋值式
*/

function add(a:number,b:number):number{
    return a + b;
}

const res1 = add(1,2)


const minus:(a:number,b:number)=>number = function(a:number,b:number):number{
    return a-b;
}


// 函数参数
// 1. 函数的实参与形参类型和数量必须一致
// add(10,'20') // 报错
// add(10,20,30) // 报错

// 2. 可选参数 与 参数默认值
// 默认值与可选参数是一个意思，所以不能同时使用可选参数与默认值
function getData(url:string,page:number=1,size?:number):void{

}

getData('/list',2,5)
getData('/list',2)
getData('/list')


// 3. 剩余参数
function total(a:number,...args:number[]):number{
    return args.reduce((prev,item)=>prev+item,a)
}

total(10,20)
total(10,20,30)
total(10,20,30,31,32,33,36,98)