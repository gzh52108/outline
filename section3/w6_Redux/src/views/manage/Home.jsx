import React from 'react'
import {withUser,withStorage,withStorages,withLogin} from '@/utils/hoc'
import { Redirect } from 'react-router'
function Home(props){
    console.log('Home.props',props)
    // if(已登录){
    //     显示Home组件代码
    // }else{
    //     跳到登录页面
    // }
    // if(props.userInfo.token){

        return (
            <div>
                Home
            </div>
        )

    // }else{
    //     <Redirect to="/login" />
    // }
    
}

// Home:OuterComponent
// Home = withUser(Home)
Home = withStorages('token','userInfo','hello')(Home)
// Home = withLogin(Home)

export default Home;
