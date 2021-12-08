import React from 'react'

import UseState from './UseState';
import UseEffect from './UseEffect';
import UseMemo from './UseMemo';
import UseCallback from './UseCallback';
import UseReducer from './UseReducer';
import UseRef from './UseRef';
import UseLayoutEffect from './UseLayoutEffect';

function Hooks(){
    const [show,setShow] = React.useState(true);
    return (
        <div>
            <h2>Hooks的使用</h2>

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
            {/* <UseReducer/> */}
            {/* <UseRef/> */}
            <UseLayoutEffect/>
        </div>
    )
}

export default Hooks;