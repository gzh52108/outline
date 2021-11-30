import React from 'react'
import {withRouter,useHistory,useLocation,useRouteMatch} from 'react-router-dom'
function Reg(props){
    console.log('Reg.props',props)
    const history = useHistory();
    console.log('Reg.history',history)
    return (
        <div>
            Reg
        </div>
    )
}

// Reg = withRouter(Reg)

export default Reg;