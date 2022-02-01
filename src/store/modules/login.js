import {
  setToken,
  getToken,
  setProfile,
  getProfile,
} from "@/utils/localStrorage";
import { getPhoneLogin, getAccountInfo, getUserInfo } from "@/apis/login";
import { Message } from "element-ui";
export default {
  namespaced: true,
  state: {
    token: getToken(),
    currentUserInfo: getProfile(),
  },
  getters: {},
  mutations: {
    GetCurrentUserInfo(state, [currentUserInfo, token]) {
      state.currentUserInfo = currentUserInfo;
      state.token = token;
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
          let token = res.data.token;
          const userRes = await getUserInfo(currentUserInfo.userId);
          let level = userRes.data.level;
          let eventCount = userRes.data.profile.eventCount;
          let userObj = { level, eventCount };
          currentUserInfo = { ...currentUserInfo, ...userObj };
          setProfile(currentUserInfo);
          setToken(token);
          Message.success("登录成功!");
          context.commit("GetCurrentUserInfo", [currentUserInfo, token]);
        } else {
          Message.error("登录失败,账号或密码不正确,请重试!");
        }
      });
    },
    //二维码登录
    async getQrcodeUserInfo(context) {
      const userInfo = await getAccountInfo();
      console.log(userInfo);
      let currentUserInfo = userInfo.data.profile;
      setProfile(currentUserInfo);
      context.commit("GetCurrentUserInfo", currentUserInfo);
    },
  },
};
