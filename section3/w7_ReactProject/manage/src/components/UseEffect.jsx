import React,{useState,useEffect} from 'react'

function UseEffect(props){
    console.log('start')
    let [qty,setQty] = useState(1)
    const [count,setCount] = useState(10)

    // 用法一：useEffect(callback)
    // 等效于componentDidMount+componentDidUpdate
    useEffect(()=>{
        // 这里的代码在每轮渲染结束后执行
        // 这里的代码在初始化与组件刷新时执行
        console.log('用法一：useEffect(callback)');
    })

    // 用法二：useEffect(callback,deps)
    // 等效于componentDidMount+shouldComponentUpdate
    useEffect(()=>{
        // 这里的代码在初始化与依赖(qty)更新时执行
        console.log('用法二：useEffect(callback,[qty])')
    },[qty])

    // 用法三：useEffect(callback,[])
    // 等效于componentDidMount
    useEffect(()=>{
        // 这里的代码在初始化时执行
        console.log('用法三：useEffect(callback,[])')
    },[])

    // 用法四：回调中返回一个函数
    // 等效于componentWillUnmount
    useEffect(()=>{
        // ajax
        return function(){
            // 这里的代码在组件被销毁时执行
            console.log('用法四：回调中返回一个函数')
            // cancelAjax()
        }
    },[])



    console.log('end')
    return (
        <div>
            <h4>useEffect</h4>

            <button onClick={()=>{
                setQty((prev)=>{
                    return prev+1
                })
            }}>qty:{qty}</button>
            <button onClick={()=>{
                setCount(count+1)
            }}>count:{count}</button>
        </div>
    )
}

export default UseEffect;