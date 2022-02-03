import request from "@/utils/request";
import { getCookie } from "@/utils/localStrorage";
//手机号登录
export function getPhoneLogin(phone, password) {
  return request({
    url: "/login/cellphone",
    method: "post",
    params: {
      phone,
      password,
    },
  });
}
//二维码登录
export function qrcodeLogin(date) {
  return request({
    url: "/login/qr/key",
    method: "get",
    params: {
      date,
    },
  });
}
export function createQrcode(date, key, qrimg) {
  return request({
    url: "/login/qr/create",
    method: "get",
    params: {
      date,
      key,
      qrimg,
    },
  });
}
export function checkQrcodeStatus(date, key) {
  return request({
    url: "/login/qr/check",
    method: "get",
    params: {
      date,
      key,
    },
  });
}
//退出登录
export function getPhoneLoginOut() {
  return request({
    url: "/logout",
    method: "get",
  });
}
//刷新
export function getPhoneLoginRefresh() {
  return request({
    url: "/login/refresh",
    method: "get",
  });
}
//账号信息
export function getAccountInfo(cookie) {
  return request({
    url: "/user/account",
    method: "get",
    params: {
      cookie,
    },
  });
}
//用户信息
export function getUserInfo(uid) {
  return request({
    url: "/user/detail",
    method: "get",
    params: {
      uid,
    },
  });
}
//上传头像
export function uploadAvatar(formData, imgSize, date) {
  return request({
    url: "/avatar/upload",
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: formData,
    params: {
      imgSize,
      date,
      cookie: getCookie(),
    },
  });
}
