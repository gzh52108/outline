import React from 'react'
import context from './context'
import TodoItem from './TodoItem'
import List from '../List'
import Button from '../Button'

function TodoContent({ datalist }) {
    const {remove,complete} = React.useContext(context);
    console.log('TodoContent.props', datalist);

    // 设置表格的渲染方式
    const column = [
        {
            label:'#',
            render(row,idx){
                return idx+1
            }
        },
        {
            label:'待办事项',
            dataKey:'todo'
        },
        {
            label:'是否完成',
            dataKey:'done',
            render(row){
                return row.done ? '是' : '否'
            }
        },
        {
            label:'操作',
            render(row){
                return (
                    <>
                        <Button className="btn-primary" onClick={complete.bind(null,row.id)}>完成</Button>
                        <Button className="btn-danger" onClick={remove.bind(null,row.id)}>删除</Button>
                    </>
                )
            }
        }
    ]
    return (
        <div>
            {/* <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">待办事项</th>
                        <th scope="col">是否完成</th>
                        <th scope="col">操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // [{},{},{}] -> [<TodoItem/>,<TodoItem/>,<TodoItem/>]
                        datalist.map((item, idx) => {
                            return <TodoItem key={item.id} item={item} index={idx} />
                        })
                    }
                </tbody>
            </table> */}
            <List rowKey="id" datasource={datalist} column={column}></List>
        </div>
    )
}


export default TodoContent;