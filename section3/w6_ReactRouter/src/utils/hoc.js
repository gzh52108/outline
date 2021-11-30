import React from 'react'
export function withUser(InnerComponent){
    return function OuterComponent(props){
        console.log('OuterComonent.props',props)
        let userInfo = localStorage.getItem('userInfo')
        try{
            userInfo = JSON.parse(userInfo) || {}
        }catch(err){
            userInfo = {}
        }

        return (
            <InnerComponent userInfo={userInfo} {...props}></InnerComponent>
        )
    }
}


export function withStorage(key){
    return function HOC(InnerComponent){
        return function OuterComonent(props){
            let value = localStorage.getItem(key)
            try{
                value = JSON.parse(value)
            }catch(err){
                value = value
            }

            const data = {}
            data[key] = value;
    
            return (
                <InnerComponent {...props} {...data}></InnerComponent>
            )
        }
    }
}