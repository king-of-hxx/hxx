import axios from "axios";
import { openLoading, closeLoading } from "./loading";

const whiteList = ["/login/qr/check", "/mv/url", "/simi/mv"];
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 20000,
  withCredentials: true,
});
//http request拦截器
instance.interceptors.request.use(
  (config) => {
    if (whiteList.indexOf(config.url) === -1) {
      openLoading();
    }
    // if (getCookie() !== undefined) {
    //   config.headers["cookie"] = encodeURIComponent(getCookie());
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
