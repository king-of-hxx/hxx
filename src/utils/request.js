import axios from "axios";
// import { Message } from "element-ui";
import { openLoading, closeLoading } from "./loading";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 20000,
  withCredentials: true,
});
//http request拦截器
instance.interceptors.request.use(
  (config) => {
    openLoading();
    // if (store.getters.token) {
    //   config.headers["X-Token"] = getToken();
    // }
    return config;
  },
  (err) => {
    closeLoading();
    return Promise.reject(err);
  }
);

//http response拦截器
instance.interceptors.response.use(
  (response) => {
    closeLoading();
    // const { code, message } = response.data;
    // if (code === 200) {
    return response;
    // } else {
    //   Message.error(message);
    //   // return Promise.reject(new Error(message));
    // }
  },
  (err) => {
    closeLoading();
    return Promise.reject(err);
  }
);
export default instance;
