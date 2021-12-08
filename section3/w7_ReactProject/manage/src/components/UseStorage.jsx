import React,{useState,useEffect,useLayoutEffect} from 'react'

import {useStorage} from '@/utils/hooks'

function UseStorage(props){
    console.log('start')
    let [qty,setQty] = useState(1)
    const [count,setCount] = useState(10)
    const [cartlist,setCartlist] = useStorage('cartlist');
    const [token,setToken] = useStorage('token');
    const [username,setUsername] = useStorage('username');
    console.log('token',token)
    console.log('username',username)
    
    setTimeout(()=>{
        setToken('safdsadf')
    },5000)

    console.log('end')
    return (
        <div>
            <h4>自定义Hook: useStorage</h4>

            <p>token:{token}</p>

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

export default UseStorage;