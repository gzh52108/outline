import {useState} from 'react'

export function useStorage(key){
    let value = localStorage.getItem(key)
    try{
        value = JSON.parse(value)
    }catch(err){
        value = value;
    }

    const [state,setState] = useState(value)

    // 修改方法
    const changeValue = function(newValue){
        setState(newValue)

        if(typeof newValue === 'object' && newValue !== null){
            newValue = JSON.stringify(newValue)
        }
        localStorage.setItem(key,newValue)
    }

    return [
        state,
        changeValue
    ]
}

// const [userInfo,setUserInfo] = useStorage('userInfo')
// const [token,setToken] = useStorage('token')
// setToken('abcdef')