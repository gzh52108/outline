import React from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
import { withAuth, withLogin, withStorage, withStorages,withRedux,withStore } from '../utils/hoc'

import { Layout, Menu, Breadcrumb, Row, Col, Button } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, SlackOutlined, HomeOutlined, PicLeftOutlined } from '@ant-design/icons';
import {connect} from 'react-redux';
import userAction from '../store/actions/user'

import style from './Manage.module.scss'


import Home from './manage/Home'
import User from './manage/User'
import Interview from './manage/Interview'



const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

// 映射redux数据
const mapStateToProps = function(state,ownProps){
    // state: redux的state
    // ownProps: 组件本身的props
    return {
        userInfo:state.user.userInfo,
    }
}
// 映射修改数据的方法
const mapDispatchToProps = function(dispatch){
    return {
       logout(){
            // dispatch({type:'logout'})
            dispatch(userAction.logout())
       },
    //    login(userInfo){
    //        dispatch({type:'login',payload:userInfo})
    //    }
    }
}

@connect(mapStateToProps,mapDispatchToProps)
// @withStore(mapStateToProps,mapDispatchToProps)
@withLogin
class Manage extends React.Component {
    state = {
        menu: [
            {
                path: '/home',
                text: '首页',
                icon: <HomeOutlined />
            },
            {
                path: '/interview',
                text: '面试题管理',
                icon: <PicLeftOutlined />,
                children: [
                    {
                        path: '/list',
                        text: '面试题列表'
                    },
                    {
                        path: '/add',
                        text: '添加面试题'
                    },
                ]
            },
            {
                path: '/user',
                text: '用户管理',
                icon: <PicLeftOutlined />,
                children: [
                    {
                        path: '/list',
                        text: '用户列表'
                    },
                    {
                        path: '/add',
                        text: '添加用户'
                    },
                ]
            },
            {
                path: '/company',
                text: '企业管理',
                icon: <PicLeftOutlined />,
                children: [
                    {
                        path: '/list',
                        text: '企业列表'
                    },
                    {
                        path: '/add',
                        text: '添加企业'
                    },
                ]
            },
            {
                path: '/pomission',
                text: '权限管理',
                icon: <PicLeftOutlined />,
                children: [
                    {
                        path: '/role',
                        text: '角色管理'
                    },
                    {
                        path: '/set',
                        text: '权限指派'
                    },
                ]
            },
        ]
    }
    changeMenu = ({ item, key, keyPath, domEvent })=>{
        console.log({ item, key, keyPath, domEvent })
        this.props.history.push(key)
    }
    // logout = ()=>{
    //     this.props.logout()
    // }
    componentDidMount() {
        console.log('Manage.componentDidMount')
    }
    render() {
        console.log('Manage.render',this.props)
        const {match,userInfo,logout} = this.props;
        const { menu } = this.state;
        return (
            <Layout style={{ height: '100vh' }}>
                <Header className={style.header}>
                    <Row>
                        <Col span={12}>
                            <div className={style.logo}>
                                <SlackOutlined className={style.icon} />
                                面试题后台管理系统
                            </div>
                        </Col>
                        <Col span={12} className="text-right">
                            {userInfo.username} <Button type="link" onClick={logout}>退出</Button>
                        </Col>
                    </Row>

                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={[match.path + '/home']}
                            defaultOpenKeys={[match.path + '/interview']}
                            style={{ height: '100%', borderRight: 0 }}
                            onClick={this.changeMenu}
                        >
                            {
                                menu.map(item => {
                                    if (item.children) {
                                        return <SubMenu key={match.path + item.path} icon={item.icon} title={item.text}>
                                            {
                                                item.children.map(it=>{
                                                    return <Menu.Item key={match.path + item.path + it.path}>{it.text}</Menu.Item>
                                                })
                                            }
                                        </SubMenu>
                                    }else{
                                        
                                        return <Menu.Item key={match.path + item.path} icon={item.icon}>{item.text}</Menu.Item>
                                    }
                                })
                            }

                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <Route path={match.path + "/home"} component={Home} />
                            <Route path={match.path + "/interview"} component={Interview} />
                            <Route path={match.path + "/user"} component={User} />
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

// Manage = withAuth(Manage)

export default Manage