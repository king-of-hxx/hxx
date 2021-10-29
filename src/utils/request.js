import axios from "axios";

const instance = axios.create({
    baseURL: '/api',
    timeout: 5000,
    withCredentials: true,
})
//http request拦截器
instance.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return Promise.reject(err);
    }
)

//http response拦截器
instance.interceptors.response.use(
    response => {
        return response;
    },
    err => {
        return Promise.reject(err);
    }
)
export default instance