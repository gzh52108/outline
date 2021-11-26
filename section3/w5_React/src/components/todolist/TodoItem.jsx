import React from 'react'
import context from './context'
function TodoItem({ item, index }) {
    const {remove,complete} = React.useContext(context);
    // console.log('TodoItem.value',value)
    return (
        // <context.Consumer>
        //     {
        //         ({remove,complete}) => {
        //             return (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{item.todo}</td>
                            {/* <td>{item.done ? '是' : '否'}</td> */}
                            <td>{item.done ? <button className="btn btn-outline-secondary" disabled>是</button> : <button className="btn btn-outline-secondary" disabled >否</button>}</td>
                            <td>
                                <button type="button" className="btn btn-primary" onClick={complete.bind(null, item.id)}>完成</button>
                                <button type="button" className="btn btn-danger" onClick={remove.bind(null, item.id)}>删除</button>
                            </td>
                        </tr>
        //             )
        //         }
        //     }

        // </context.Consumer>
    )
}



export default TodoItem;