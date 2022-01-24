import { getSongList } from "@/apis/getSongDetail";
import { setsongId, getsongId } from "@/utils/localStrorage";
export default {
  namespaced: true,
  state: {
    songId: getsongId(),
    picUrl: "",
    avatarUrl: "",
    songName: "",
    nickname: "",
    tags: [],
    subscribedCount: "",
    shareCount: "",
    createTime: "",
    playCount: "",
    commentCount: "",
    description: "",
    trackIds: [],
  },
  getters: {},
  mutations: {
    GetRecommendPlaylistInfo(state, object) {
      state.picUrl = object.coverImgUrl;
      state.songName = object.name;
      state.nickname = object.creator.nickname;
      state.avatarUrl = object.creator.avatarUrl;
      state.tags = object.tags;
      state.subscribedCount = object.subscribedCount;
      state.shareCount = object.shareCount;
      state.createTime = object.createTime;
      state.playCount = object.playCount;
      state.description = object.description;
      state.trackIds = object.trackIds;
      state.commentCount = object.commentCount;
    },
    getSongId(state, id) {
      state.songId = id;
      setsongId(id);
    },
  },
  actions: {
    async getRecommendPlaylistInfo(context, id) {
      const res = await getSongList(id);
      // console.log(res.data.playlist);
      context.commit("GetRecommendPlaylistInfo", res.data.playlist);
    },
  },
};
