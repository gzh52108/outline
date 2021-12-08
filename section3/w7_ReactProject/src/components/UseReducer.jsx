import React, { useState, useEffect, useMemo, useCallback, useReducer } from 'react'

const initState = [
    { id: 1, name: "goods1", price: 98, qty: 2 },
    { id: 2, name: "goods2", price: 198, qty: 2 },
    { id: 3, name: "goods3", price: 998, qty: 1 },
];
const reducer = (state, action) => {
    switch (action.type) {
        // 添加商品
        // dispatch({type:'add',payload:goods})
        case 'add':
            return [action.payload, ...state];

        // 删除商品
        // dispatch({type:'remove',payload:{id}})
        case 'remove':
            return state.filter(item => item.id != action.payload.id);

        // dispatch({type:'change',payload:{id,qty}})
        case 'change':
            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.qty = action.payload.qty;
                }
                return item;
            })
        // dispatch({type:'clear'})
        case 'clear':
            return []
        default:
            throw new Error('type error');
    }
}


function UseReducer(props) {
    console.log('start')
    const [count, setCount] = useState(10)

    const [cartlist, dispatch] = useReducer(reducer, initState)

    // 计算总价
    const totalPrice = useMemo(()=>{
        return cartlist.reduce((val,item)=>val+item.price*item.qty,0)
    },[cartlist])


    const addItem = useCallback(()=>{
        const id = parseInt(Math.random()*10000)
        const goods = { id, name: "goods"+id, price: 100, qty: 1 }
        dispatch({type:'add',payload:goods})
    },[])
    const clear = useCallback(()=>{
        dispatch({type:'clear'})
    },[])
    const removeItem = useCallback((id)=>{
        dispatch({type:'remove',payload:{id}})
    },[])
    const changeQty = useCallback(function (id,e) {
        dispatch({type:'change',payload:{
            id,
            qty:e.target.value
        }})
    }, []);

    const changeCount = useCallback(() => {
        console.log('changeCount', count);
        setCount(count + 1)
    }, [count])


    console.log('end')
    return (
        <div>
            <h4>useReducer</h4>
            <button onClick={changeCount}>count:{count}</button>
            <p>购物车：{cartlist.length}</p>
            <ul>
                {
                    cartlist.map(item=>{
                        return (
                            <li key={item.id}>
                                <h4>{item.name}</h4>
                                <input type="number" value={item.qty} onChange={changeQty.bind(null,item.id)} />
                                <button onClick={removeItem.bind(null,item.id)}>删除</button>
                            </li>
                        )
                    })
                }
            </ul>
            <button onClick={clear}>清空</button>
            <button onClick={addItem}>添加</button>
            <p>总价：{totalPrice}</p>
        </div>
    )
}

export default UseReducer;