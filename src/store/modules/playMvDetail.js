import { getMVInfo, getMVUrl, getRelateMV } from "@/apis/mvDetail/mvDetail";
import {
  setMvInfo,
  getMvInfo,
  setMvurl,
  getMvurl,
  setMvArr,
  getMvArr,
} from "@/utils/localStrorage";
export default {
  namespaced: true,
  state: {
    mvInfo: getMvInfo(),
    mvUrl: getMvurl(),
    mvs: getMvArr(),
  },
  getters: {},
  mutations: {
    GetMvInfo(state, mvInfo) {
      state.mvInfo = mvInfo;
      setMvInfo(mvInfo);
    },
    GetMvUrl(state, url) {
      state.mvUrl = url;
      setMvurl(url);
      console.log(url);
    },
    GetRelateMv(state, mvs) {
      state.mvs = mvs;
      setMvArr(mvs);
    },
  },
  actions: {
    async getMvInfo(context, mvid) {
      const res = await getMVInfo(mvid);
      let mvInfo = res.data.data;
      context.commit("GetMvInfo", mvInfo);
    },
    async getMvUrl(context, id) {
      const res = await getMVUrl(id);
      //   console.log(res);
      const { url } = res.data.data;
      context.commit("GetMvUrl", url);
    },
    async getRelateMv(context, id) {
      const res = await getRelateMV(id);
      console.log(res.data);
      const { mvs } = res.data;
      context.commit("GetRelateMv", mvs);
    },
  },
};
