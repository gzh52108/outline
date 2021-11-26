import React from 'react'

import TodoForm from './TodoForm'
import TodoContent from './TodoContent'
import TodoFoot from './TodoFoot'

import context from './context'
import 'bootstrap/dist/css/bootstrap.css'

class Todolist extends React.Component {
    // constructor() {
    //     super()

    //     console.log('Todolist', this)
    //     // 定义组件状态（数据）
    //     this.state = {
    //         // count:1,
    //         datalist: [
    //             {
    //                 id: 1,
    //                 todo: '顶个小目标，赚它一个亿',
    //                 done: false,
    //                 addtime: Date.now() + 100
    //             },
    //             {
    //                 id: 2,
    //                 todo: '迎娶白富美，达到巅峰状态',
    //                 done: true,
    //                 addtime: Date.now() + 300
    //             },
    //             {
    //                 id: 3,
    //                 todo: '出任CEO，达到疯癫状态',
    //                 done: false,
    //                 addtime: Date.now() + 600
    //             },
    //         ]
    //     }

    //     // this.addItem = this.addItem.bind(this);
    //     // this.completeItem = this.completeItem.bind(this);
    //     // this.removeItem = this.removeItem.bind(this);
    // }

    state = {
        // count:1,
        datalist: [
            {
                id: 1,
                todo: '顶个小目标，赚它一个亿',
                done: false,
                addtime: Date.now() + 100
            },
            {
                id: 2,
                todo: '迎娶白富美，达到巅峰状态',
                done: true,
                addtime: Date.now() + 300
            },
            {
                id: 3,
                todo: '出任CEO，达到疯癫状态',
                done: false,
                addtime: Date.now() + 600
            },
        ]
    }

    // 在这里定义的发方法会成为原型方法
    addItem = (todo) => {
        const newItem = {
            id: parseInt(Math.random() * 10000),
            todo,
            done: false,
            addtime: Date.now()
        }

        // react中不能直接修改原来的状态，而是使用一个新的值去覆盖
        const datalist = [...this.state.datalist];
        datalist.unshift(newItem)
        this.setState({
            datalist
        })
    }
    // 定义时使用箭头函数
    completeItem = (id) => {
        const { datalist } = this.state
        // [{},{}] -> [{},{}]
        const newDatalist = datalist.map(item => {
            if (item.id === id) {
                item.done = !item.done;
            }
            return {
                ...item
            }
        })
        this.setState({
            datalist: newDatalist
        })
    }
    removeItem = (id) => {
        // [{},{},{}] -> [{},{}]
        const newDatlist = this.state.datalist.filter(item=>item.id!==id).map(item=>({...item}))
        this.setState({
            datalist:newDatlist
        })
    }
    selectItem = ()=> {

    }
    render() {
        console.log('Todolist.render', this)
        const { datalist } = this.state;
        return (
            <context.Provider value={{ 
                add:this.addItem,
                remove: this.removeItem, 
                complete: this.completeItem 
            }}>
                <div className="todolist">
                    {
                        // Todolist: <button onClick={()=>{
                        //     this.setState({
                        //         count:this.state.count+1
                        //     })
                        // }}>count:{this.state.count}</button>
                    }
                    <TodoForm />
                    <TodoContent datalist={datalist} />
                    <TodoFoot datalist={datalist} />
                </div>
            </context.Provider>
        )
    }

}

export default Todolist