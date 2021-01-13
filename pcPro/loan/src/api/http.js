import axios from '@/utils/request.js'


export function login(obj){ //登录
    return axios({
        method:"post",
        url:"user/login",
        data:obj
    })
}

export function logout(){ //退出登录
    return axios({
        method:"post",
        url:"user/logout",
    })
}