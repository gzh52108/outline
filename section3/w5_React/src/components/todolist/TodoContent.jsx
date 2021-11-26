import React from 'react'

import TodoItem from './TodoItem'

function TodoContent({ datalist }) {
    console.log('TodoContent.props', datalist);
    return (
        <div>
            <table className="table table-striped">
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
            </table>

        </div>
    )
}


export default TodoContent;