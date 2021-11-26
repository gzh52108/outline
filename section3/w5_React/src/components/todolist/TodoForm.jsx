import React from 'react'
import context from './context'
class TodoForm extends React.Component {
    // constructor(props,context) {console.log('constructor.context',context)
    //     super(props)
    //     this.state = {
    //         todo: ''
    //     }

    // }
    state = {
        todo:''
    }
    addItem =() => {
        // 非受控组件：节点操作方式
        // const todo = this.input.value; // this.refObj.current.value

        // 受控组件：组件状态操作方式
        const todo = this.state.todo

        // this.props.addItem(todo)
        this.context.add(todo)


        // 清空并自动获得焦点
        this.setState({
            todo: ''
        })
        this.input.focus();
    }
    changeTodo = (e)=>{
        this.setState({
            todo: e.target.value
        })
    }
    render() {
        console.log('TodoForm.render',this)
        // 创建ref对象
        // this.refObj = React.createRef();
        // console.log(refObj.current)
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control"
                    ref={(el) => this.input = el}
                    // ref={this.refObj}
                    value={this.state.todo}
                    onChange={this.changeTodo}
                />
                <button className="btn btn-success" onClick={this.addItem}>添加</button>
            </div>
        )
    }

}
TodoForm.contextType = context;

export default TodoForm;