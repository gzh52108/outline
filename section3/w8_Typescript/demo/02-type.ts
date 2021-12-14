/*
    类型系统
        * 类型注解
        * 类型检查
    
    * 类型
        * 基本类型
*/

// 1.1基本类型
let a: number = 10;
let b: string = 'hello ts'
let c: boolean = true;

// 1.2 特殊类型
let d: null = null; // undefined
let e: undefined = null;

// any: 使用any, 相当前关闭ts的类型检查
// 在实际开发中应尽量少用any类型
let f: any = 10;
f = '20';
f = true;

// 隐式any：声明变量不指定类型也不赋值
let g;

// unknown: 
let h:unknown = 10
h = '20'
h = true;

// 字面量：使用数据限定变量类型
let age:18 = 18; // 等效于const age:number = 18


// 2. 联合类型
let index:number|string = 1
index = '1'
let idx:number|string = 2;

// 3. 类型别名
type ns = number|string;
let index2:ns = 10;
index2 = '10'
let idx2:ns = 20

// 4. 类型推论：ts会根据变量的值自动推断出变量类型
let username = 'laoxie'
// username = 100;
let password:string

function sum(a,b){
    // let a, b
}