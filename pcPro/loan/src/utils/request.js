import axios from 'axios'
import { getToken } from '@/utils/token'

axios.defaults.baseURL ='http://139.196.42.209:5004/api/'

axios.interceptors.request.use((config)=>{

    console.log(config)
    config.headers['token'] = getToken()
    return config
})

axios.interceptors.response.use(response=>{
    return response
},err=>{
    return Promise.reject(err)
})

export default axios