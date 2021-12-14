/*
    数组类型
*/

let arr1:number[] = [10,20,30]
let arr2:string[] = ['html5','css3','javascript','typescript']
let arr3:Array<number> = [1,2,3]


// 元组Tuple：类似于数组，是一个明确元素数量和类型的数组，各元素的类型不必相同，一般用于函数返回值
let arr4 = ['laoxie',18,true]
let arr5:[string,number,boolean] = ['laoxie',18,true]
// let [state,setState] = useState(1)

// 数组与对象的结合
let goodslist:{name:string,price:number,id:number|string}[] = [
    {
        name:'goods1',
        price:98,
        id:1
    },
    {
        name:'goods2',
        price:198,
        id:2
    },
    {
        name:'goods3',
        price:1998,
        id:3
    }
]