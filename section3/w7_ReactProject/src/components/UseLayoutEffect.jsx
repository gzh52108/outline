import React,{useState,useEffect,useLayoutEffect} from 'react'

function UseEffect(props){
    console.log('start')
    let [qty,setQty] = useState(1)
    const [count,setCount] = useState(10)

    // vDOM -> diff -> DOM -> （useLayoutEffect）浏览器渲染 （useEffect执行）
    // useLayoutEffect为同步代码，会阻塞浏览器渲染
    useEffect(()=>{
        // 这里的代码在每轮渲染结束后执行
        console.log('useEffect()');
    })
    
    useLayoutEffect(()=>{
        // 这里的代码在每轮渲染结束后执行
        console.log('useLayoutEffect()');
        for(let i=0;i<1000;i++){
            console.log('666');
        }
    })



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