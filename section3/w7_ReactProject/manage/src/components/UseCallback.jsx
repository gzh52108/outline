import React,{useState,useEffect,useMemo,useCallback} from 'react'

const fn = new Set()

function UseCallback(props){
    console.log('start')
    let [qty,setQty] = useState(1)
    const [count,setCount] = useState(10)

    // 传统用法：每次组件刷新都会重新创建一个新的函数
    // const changeQty = function(){
    //     setQty((prev)=>{
    //         return prev+1
    //     })
    // }

    // 用法一：默认用法
    // 用传统用法一致，每次组件刷新都会重新创建一个新的函数（不推荐）
    // const changeQty = useCallback(function(){
    //     setQty((prev)=>{
    //         return prev+1
    //     })
    // });

    // 用法二：空依赖
    // 只在初始化时创建函数，组件刷新时得到缓存函数（上一次创建的函数）
    const changeQty = useCallback(function(){
        setQty((prev)=>{
            return prev+1
        })
    },[]);

    fn.add(changeQty);

    console.log('fn',fn)

    // 用法三：指定依赖
    // 在初始化与count发生变化时创建函数，否则得到缓存函数（上一次创建的函数）
    const changeCount = useCallback(()=>{
        console.log('changeCount',count);
        setCount(count+1)
    },[count])

    
    console.log('end')
    return (
        <div>
            <h4>useCallback</h4>

            <button onClick={changeQty}>qty:{qty}</button>
            <button onClick={changeCount}>count:{count}</button>
        </div>
    )
}

export default UseCallback;