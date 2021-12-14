/*
    对象类型
        * 接口interface: 接口用于描述对象的形状（确定对象的属性结构）
*/


interface User{
    username:string
    password:number|string
    isDanshen:boolean

    // 可选属性
    age?:number

    // 只读属性：readonly
    readonly gender:string
}

let user:User = {
    username:'jingjing',
    password:123,
    isDanshen:true,
    gender:'女'
}

let superstar:User = {
    username:'罗志祥',
    password:'123456',
    isDanshen:true,
    age:18,
    gender:'男'
}
// superstar.gender = '不详'; // 报错

interface IItemData{
    id:string|number
    name:string
    price:number

    // 可选属性
    imgurl?:string

    // 任意属性
    [key:string]:any   
}
interface IData{
    list:IItemData[]
    page?:number
    size?:number
}

const data:IData = {
    list:[{
        id:1,
        name:'goods1',
        price:123,
        checked:true,
        addtime:'123423412134'
    }]
}
// data.page = 1;
// data.size = 2;


// 对象方法
interface ITools{
    formatData?:(data:any)=>void
    getData?(url:string):void
}
const tools:ITools = {
    formatData:function(data){

    },
    getData(url){

    }
}