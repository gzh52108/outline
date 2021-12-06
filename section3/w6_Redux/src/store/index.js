import {createStore,applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import reducer from './reducers'


const enhancer = applyMiddleware(thunk)


// reducer: 修改state的方法(Function)
// state: 初始状态(Object)
// enhancer：中间件(Function)
const store = createStore(reducer,enhancer);// 等效于createStore(reducer,undefined,enhancer)

console.log('state',store.getState())


export default store;