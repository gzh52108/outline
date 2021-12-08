import React,{useReducer} from 'react'

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

export const context = React.createContext(null)

export function Provider(props){
    const [state,dispatch] = useReducer(reducer,initState)
    return (
        <context.Provider value={{state,dispatch}}>
            {props.children}
        </context.Provider>
    )
}
