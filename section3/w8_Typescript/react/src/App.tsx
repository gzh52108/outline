import React,{useState,useEffect, ReactPropTypes, ReactChildren} from 'react'

interface IProps{
    a?:number
}

function App(props:IProps){
    
    return (
        // <div>App</div> -> <div>App</div> -> React.createElement()
        <div>App</div>
    )
}

export default App;