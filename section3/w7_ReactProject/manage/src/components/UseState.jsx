import React from 'react'

function UseState(){
    console.log('start')
    let [qty,setQty] = React.useState(1)

    console.log('qty=',qty)

    console.log('end')
    return (
        <div>
            <h4>useState</h4>

            <button onClick={()=>{
                // setQty(qty+1)
                setQty((prev)=>{
                    return prev+1
                })
            }}>qty:{qty}</button>
        </div>
    )
}

export default UseState;