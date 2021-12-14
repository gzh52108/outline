/*
    泛型编程：Generic
    在定义函数、接口或类时不明确类型，可以使用泛型，可以让编写的代码更加灵活。泛型即定义时不指定具体类型，而是使用类型变量，调用时才指定类型的编程方式，这样能更好的实现代码复用
*/

function createNumberArray(item:number,len:number):number[]{
    // const result:number[] = []

    // for(let i=0;i<len;i++){
    //     result.push(item)
    // }

    const result:number[] = Array(len).fill(item)

    return result
}

function createStringArray(item:string,len:number):string[]{
    const result:string[] = Array(len).fill(item)
    return result
}

createNumberArray(10,3);// [10,10,10]
createNumberArray(20,4);// [20,20,20,20]
createStringArray('520',10);// [520,'hello',20,20]


// 利用泛型封装一个函数，实现以上代码效果
function createArray<T>(item:T,len:number):T[]{
    const result:T[] = Array(len).fill(item)
    return result
}

// 推断泛型
createArray(10,3); //[10,10,10]
createArray('hello',3) ;// ['hello','hello','hello']

// 指定泛型
createArray<boolean>(true,3)


interface IGoods<T>{
    id:T
    name:string
}

const goods1:IGoods<number> = {
    id:10,
    name:'goods1'
}