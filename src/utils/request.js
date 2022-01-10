import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
  withCredentials: true,
});
//http request拦截器
instance.interceptors.request.use(
  (config) => {
    // if (store.getters.token) {
    //   config.headers["X-Token"] = getToken();
    // }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

//http response拦截器
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default instance;
