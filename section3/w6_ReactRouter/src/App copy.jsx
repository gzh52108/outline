import React from 'react'

import { Route, HashRouter, Redirect, Switch, Link, NavLink,withRouter } from 'react-router-dom'

import Home from './views/Home'
import Login from './views/Login'
import Reg from './views/Reg'
import Manage from './views/Manage'

import './App.css'

class App extends React.Component {
    goto = (url)=>{
        this.props.history.push(url)
    }
    render() {
        console.log('App.props',this.props)
        return (
            <div className="container">
                App
                <NavLink to="/home" activeClassName="current" activeStyle={{color:'#58bc58',fontWeight:'bold'}}>首页</NavLink>
                <NavLink to="/login">登录</NavLink>
                <NavLink to="/reg" replace>注册</NavLink>

                <div>
                    <button onClick={this.goto.bind(this,'/home')}>首页</button>
                    <button onClick={this.goto.bind(this,'/login')}>登录</button>
                    <button onClick={this.goto.bind(this,'/reg')}>注册</button>

                </div>

                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/manage" component={Manage} />
                    <Route path="/login" component={Login} />
                    <Route path="/reg">
                        <Reg />
                    </Route>
                    {/* <Route path="/notfound" render={()=><div>页面不存在</div>} /> */}
                    <Route path="/notfound">
                        <div>there is nothing hear</div>
                    </Route>
                    <Redirect from="/" to="/home" exact />
                    <Redirect from="*" to="/notfound" />
                </Switch>
            </div>
        )
    }

}



export default withRouter(App);