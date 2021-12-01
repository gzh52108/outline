import React from 'react'

import { Route, HashRouter, Redirect, Switch, Link, NavLink,withRouter } from 'react-router-dom'

import 'antd/dist/antd.css'


import Login from './views/Login'
import Manage from './views/Manage'

import './App.scss'

class App extends React.Component {
    goto = (url)=>{
        this.props.history.push(url)
    }
    render() {
        console.log('App.props',this.props)
        return (
            <div className="container">
                <Switch>
                    <Route path="/manage" component={Manage} />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        )
    }
}



export default withRouter(App);