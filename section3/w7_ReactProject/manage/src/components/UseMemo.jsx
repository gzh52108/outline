import React,{useState,useEffect,useMemo} from 'react'

function UseMemo(){
    console.log('start')
    let [qty,setQty] = useState(1)
    const [count,setCount] = useState(10)
    const [goodslist,setGoodslist] = useState([
        {name:'goods1',price:98,qty:1},
        {name:'goods2',price:198,qty:2},
        {name:'goods3',price:298,qty:1},
        {name:'goods4',price:598,qty:3},
        {name:'goods5',price:998,qty:10},
        {name:'goods6',price:1998,qty:5},
    ])

    // 用法一：默认用法（不推荐）
    // const totalPrice = useMemo(()=>{
    //     // 这里的代码在初始化与组件刷新时都会执行
    //     console.log('用法一：默认用法（不推荐）')
    //     return goodslist.reduce((val,item)=>val+item.price*item.qty,0);
    // })

    // 用法二：空依赖
    // const totalPrice = useMemo(()=>{
    //     // 这里的代码只有在初始化时执行，组件刷新时得到缓存值（上一次计算的值）
    //     console.log('用法二：空依赖')
    //     return goodslist.reduce((val,item)=>val+item.price*item.qty,0);
    // },[])

    // 用法三：指定依赖
    const totalPrice = useMemo(()=>{
        // 这里的代码只有在初始化或goodslist发生变化时执行，否则得到缓存值（上一次计算的值）
        console.log('用法三：指定依赖')
        return goodslist.reduce((val,item)=>val+item.price*item.qty,0);
    },[goodslist])


    console.log('totalPrice',totalPrice)

    console.log('end')
    return (
        <div>
            <h4>useMemo</h4>

            <button onClick={()=>{
                setQty((prev)=>{
                    return prev+1
                })
            }}>qty:{qty}</button>
            <button onClick={()=>{
                setCount(count+1)
            }}>count:{count}</button>

            <div>{JSON.stringify(goodslist)}</div>
            <p>总价：{totalPrice}</p>
            <button onClick={()=>{
                setGoodslist(prev=>{
                    return [...prev,{name:'goodsN',price:1000,qty:1}]
                })
            }}>添加商品</button>
        </div>
    )
}

export default UseMemo;