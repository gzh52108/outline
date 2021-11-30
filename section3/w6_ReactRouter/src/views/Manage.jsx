import React from 'react'
import {withAuth, withLogin,withStorage, withStorages} from '../utils/hoc'

@withLogin
class Manage extends React.Component{
    componentDidMount(){
        console.log('Manage.componentDidMount')
    }
    render(){
        console.log('Manage.render')
        return (
            <div>
                Manage
            </div>
        )
    }
}

// Manage = withAuth(Manage)

export default Manage