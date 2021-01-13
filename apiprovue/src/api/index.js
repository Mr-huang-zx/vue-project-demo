import axios from 'axios';

axios.defaults.baseURL = 'http://47.96.117.121:7002'
// 添加请求拦截
// 在发送请求前要做的事情
axios.interceptors.request.use((config)=>{
    return config
})

// 添加响应拦截器
axios.interceptors.response.use((response)=>{
    return response
},err=>{
    return Promise.reject(err)
})

export default axios