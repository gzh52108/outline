const idx:number = 100;
// idx = '10'
console.log('hello idx',idx);

const getData = (url:string,page:number=1)=>{

}

// const username;

export {
    getData
}

const box = document.querySelector('#box')

// 可选链操作符
box?.addEventListener('click',()=>{

})

const username:string = 'laoxie';


// lodash
import {capitalize,camelCase} from 'lodash'

// 声明函数类型
// declare function capitalize(str?:string):string;

const result:string = capitalize('Hello word')
console.log(result)
camelCase('hello word');