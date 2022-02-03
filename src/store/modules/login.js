import {
  setCookie,
  getCookie,
  setProfile,
  getProfile,
} from "@/utils/localStrorage";
import { getPhoneLogin, getAccountInfo, getUserInfo } from "@/apis/login";
import { Message } from "element-ui";
export default {
  namespaced: true,
  state: {
    cookie: getCookie(),
    currentUserInfo: getProfile(),
  },
  getters: {},
  mutations: {
    GetCurrentUserInfo(state, [currentUserInfo, cookie]) {
      state.currentUserInfo = currentUserInfo;
      state.cookie = cookie;
    },
    GetChangeUserImg(state, avatarUrl) {
      let userImgObj = { avatarUrl };
      let userInfoObj = { ...state.currentUserInfo, ...userImgObj };
      // console.log(22222, userInfoObj);
      setProfile(userInfoObj);
      setTimeout(() => {
        location.reload();
      }, 500);
    },
  },
  actions: {
    //手机号登录
    getCurrentUserInfo(context, form) {
      const { phone, password } = form;
      getPhoneLogin(phone, password).then(async (res) => {
        console.log(res.data);
        const { code } = res.data;
        if (code === 200) {
          let currentUserInfo = res.data.profile;
          let cookie = res.data.cookie;
          const userRes = await getUserInfo(currentUserInfo.userId);
          let level = userRes.data.level;
          let eventCount = userRes.data.profile.eventCount;
          let userObj = { level, eventCount };
          currentUserInfo = { ...currentUserInfo, ...userObj };
          setProfile(currentUserInfo);
          setCookie(cookie);
          Message.success("登录成功!");
          context.commit("GetCurrentUserInfo", [currentUserInfo, cookie]);
        } else {
          Message.error("登录失败,账号或密码不正确,请重试!");
        }
      });
    },
    //二维码登录
    async getQrcodeUserInfo(context, cookie) {
      const userInfo = await getAccountInfo(cookie);
      console.log(userInfo);
      let UserInfo = userInfo.data.profile;
      const userres = await getUserInfo(UserInfo.userId);
      console.log(userres);
      let level = userres.data.level;
      let eventCount = userres.data.profile.eventCount;
      let followeds = userres.data.profile.followeds;
      let follows = userres.data.profile.follows;
      let userObj = { level, eventCount, followeds, follows };
      UserInfo = { ...UserInfo, ...userObj };
      setProfile(UserInfo);
      setCookie(cookie);
      context.commit("GetCurrentUserInfo", [UserInfo, cookie]);
    },
  },
};
