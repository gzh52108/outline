import React from 'react'
import request from '@/utils/request'
import { message } from 'antd'
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'

import MyForm from './Form'

class Add extends React.Component {
    state = {
        data: {},
        initialValues: {
            difficulty: 2,
            hot: 100
        }
    }
    onFinish = async ({ _id, ...values }) => {
        console.log('value', values)
        const { data } = await request.post('/iq/', values)

        console.log('data', data);
        if (data.status === 200) {
            message.success('添加成功')
            this.props.history.push('/manage/interview/list')
        }
    }
    componentDidMount() {
    }
    render() {

        const { initialValues } = this.state;
        return (
            <div>
                <MyForm/>
            </div>
        )


    }

}


export default Add;
