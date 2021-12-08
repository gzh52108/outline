import React from 'react'

import UseState from './UseState';
import UseEffect from './UseEffect';
import UseMemo from './UseMemo';
import UseCallback from './UseCallback';
import UseReducer from './UseReducer';
import UseRef from './UseRef';
import UseLayoutEffect from './UseLayoutEffect';
import UseStorage from './UseStorage';

import {context} from '@/myredux'

function Hooks(){
    const [show,setShow] = React.useState(true);
    // const [cartlist] = React.useReducer(reducer,initState)
    const {state} = React.useContext(context)
    return (
        <div>
            <h2>Hooks的使用</h2>
            <p>cart:{state.length}</p>
            {/* <UseState/> */}
            {/* {
                show ? 
                <UseEffect/>
                :
                null
            }
            <button onClick={()=>{
                setShow(!show)
            }}>show/hide</button> */}
            {/* <UseMemo/> */}
            {/* <UseCallback/> */}
            <UseReducer/>
            {/* <UseRef/> */}
            {/* <UseLayoutEffect/> */}
            {/* <UseStorage/> */}
        </div>
    )
}

export default Hooks;