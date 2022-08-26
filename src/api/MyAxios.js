import axios from "axios";

const MyAxios = axios.create({

    baseURL: 'http://localhost:3108',

    timeout:5000
    
})
// 请求拦截器
MyAxios.interceptors.request.use((config) => {
    // 添加请求头 token
    if(localStorage.getItem('token'))
        config.headers.Authorization = localStorage.getItem('token')
    
    return config;
})
// 响应拦截器
MyAxios.interceptors.response.use(res => {
    return res.data
},err => {
    return new Promise.reject(new Error(err.message))
})

export default MyAxios