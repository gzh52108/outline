import React from 'react'
import request from '@/utils/request'
import {Table,Button,Row,Col} from 'antd'
import {DeleteOutlined,PlusOutlined} from '@ant-design/icons'



const rowSelection = {
    onChange(selectedRowKeys, selectedRows){
        // selectedRowKeys: 选中行对应的rowKey组成的数组
        // selectedRows：选中行对应的数据
        console.log(selectedRowKeys, selectedRows)
    }
}

class List extends React.Component{
    state = {
        columns:[{}],
        data:[],
        total:0,
        page:1,
        size:10,
    }
    getData = async ()=>{
        const {page,size} = this.state
        const {data} = await request.get('/iq',{
            params:{
                page,
                size
            }
        })
        console.log('data=',data)
        this.setState({
            data:data.data.result,
            total:data.data.total
        })
    }
    goto = (url)=>{
        this.props.history.push({
            pathname:url,
            search:'page=1&size=10',
            state:{c:10,d:20},
            // 以下为自定义数据
            username:'laoxie',
            params:{a:100,b:200},
        })
    }
    componentDidMount(){
        this.getData();

    }
    render(){
        console.log('List.props',this.props)
        const {data,total,size}  = this.state;
        const pagination = {
            size:"small",
            total,
            showTotal:(total)=>{
                return `共${total}条记录`
            },
            pageSize:size,
            showSizeChanger:true,
            onChange:(page,size)=>{
                this.setState({
                    page,
                    size
                },()=>{
                    this.getData();
                })
            }
        }
        const columns = [
            {
                title:'#',
                width:50,
                render(value,row,index){
                    // value: dataIndex对应的值，如不指定dataIndex,则于row一致
                    return index+1;
                }
            },
            {
                title:'面试题',
                dataIndex:'question',
                render(value,row){
                    return <>
                        <h5>{row.question}</h5>
                        <div>{row.answer}回答  {row.hot}查看</div>
                    </>
                }
            },
            {
                title:'操作',
                width:160,
                render:(row)=>{
                    return <>
                        <Button type="primary" size="small" ghost onClick={this.goto.bind(this,`/manage/interview/edit/${row._id}`)}>编辑</Button>
                        <Button size="small" danger>删除</Button>
                    </>
                }
            }
        ]
        return (
            <div>
                <Row gutter={[20,20]}>
                    <Col span={12}>
                        <Button type="primary" icon={<PlusOutlined />}>添加</Button>
                    </Col>
                    <Col span={12} className="text-right">
                        <Button type="primary" icon={<DeleteOutlined />} danger>批量删除</Button>
                    </Col>
                </Row>
                <Table
                style={{marginTop:20}}
                rowKey="_id" 
                columns={columns} 
                dataSource={data} 
                rowSelection={rowSelection}
                pagination={pagination}
                />
            </div>
        )
    }

}


export default List;
