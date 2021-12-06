import {createStore,combineReducers} from 'redux'

import reducer from './reducers'


// const state = {
//     user:{
//         userInfo:{
//             username:'laoxie'
//         }
//     },
//     common:{
//         collapse:true,
//     },
//     interview:{
//         a:100
//     },
//     permission:{
//         b:200
//     }
// }



const store = createStore(reducer)

console.log('state',store.getState())


export default store;