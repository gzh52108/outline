export const CURRENT_USER_LOGOUT = 'CURRENT_USER_LOGOUT_SYNC'

// 一个用户创建{type:'login'}的函数
export function test(data){
    return {
        type:CURRENT_USER_LOGOUT,
        payload:data
    }
}
export function login(data){
    return {
        type:'login',
        payload:data
    }
}
export function logout(data){
    return {
        type:'logout'
    }
}

export default {
    login,
    logout
}