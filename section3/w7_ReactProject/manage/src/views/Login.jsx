import React from 'react'
import {Form,Input,Checkbox,Button,message} from 'antd'
import request from '../utils/request'
import {useDispatch} from 'react-redux'
import userAction from '../store/actions/user'
import { useNavigate } from 'react-router'

function Login(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onFinish = function(values){
        console.log('values',values)

        const action = dispatch(userAction.loginAsync(values)).then((data)=>{
            console.log('data=>',data)

            if(data.status === 200){
                navigate('/manage')
                message.success('登录成功')
            }else{
                message.error('用户名或密码错误')
            }
        })

    }
    return (
        <div className="login-form">
            <h1>面试题后台管理系统</h1>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 14 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: '请输入用户名' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 14 }}>
                    <Checkbox>下次免登录</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 14 }}>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default Login;