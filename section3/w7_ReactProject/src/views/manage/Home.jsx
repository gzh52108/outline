import React from 'react'
import {bindActionCreators} from 'redux'
import {connect,useDispatch,useStore,useSelector} from 'react-redux'
import userAction from '@/store/actions/user'

function Home(props){
    console.log('Home.props',props)
    const dispatch = useDispatch();
    const store = useStore()
    const userInfo = useSelector((state)=>{
        return state.userInfo;
    })
    console.log('userInfo',userInfo)
        return (
            <div>
                Home
                <button onClick={()=>{
                    dispatch({type:'logout'})
                }}>退出</button>
            </div>
        )
}

const mapStateToProps = function(state){
    return state;
}
const mapDispatchToProps = function(dispatch){
    // return {
    //     login(data){
    //         dispatch(userAction.login(data))
    //     },
    //     logout(){
    //         dispatch(userAction.logout())
    //     }
    // }
    return bindActionCreators(userAction,dispatch)
}

// userAction = {login,logout}
// function bindActionCreators(actionCreator,dispatch){
//     const result = {}
//     for(let key in actionCreator){
//         result[key] = function(...args){
//             // dispatch(actionCreator[key].apply(this,arguments))
//             dispatch(actionCreator[key](...args))
//         }
//     }
//     return result;
// }


Home = connect(mapStateToProps,mapDispatchToProps)(Home)


export default Home;
