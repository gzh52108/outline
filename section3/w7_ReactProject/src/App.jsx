import React from 'react'

import { Route,  Routes} from 'react-router-dom'

import Login from './views/Login'
import Manage from './views/Manage'
import Home from './views/manage/Home'
import User from './views/manage/User'
import Interview from './views/manage/Interview'
import List from './views/manage/interview/List'
import Add from './views/manage/interview/Add'
import Edit from './views/manage/interview/Edit'

import Hooks from './components/Hooks'

import 'antd/dist/antd.css'
import './App.scss'


function App(){
    return (
        <div className="container">
            <Hooks/>
            <Routes>
                {/* <Route path="/manage" component={Manage} />
                <Route path="/login" component={Login} /> */}
                {/* <Route path="/manage" element={<Manage/>}>
                    <Route path="home" element={<Home />} />
                    <Route path="interview" element={<Interview />}>
                        <Route path="list" element={<List/>} />
                        <Route path="add" element={<Add/>} />
                        <Route path="edit/:id" element={<Edit/>} />
                    </Route>
                    <Route path="user" element={<User />} />
                </Route> */}
                <Route path="/manage/*" element={<Manage/>}/>
                <Route path="/login" element={<Login/>} />
            </Routes>
        </div>
    )
}


export default App;