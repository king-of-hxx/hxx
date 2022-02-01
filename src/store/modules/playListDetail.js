import { getMusicUrl, getMusicInfo, getSongList } from "@/apis/getSongDetail";
import { getMyLoveMusic } from "@/apis/myLoveMusic";
import {
  setLocalStrorage,
  getLocalStrorage,
  // setCurrentMusicUrl,
  // getCurrentMusicUrl,
} from "@/utils/localStrorage";
import Vue from "vue";
export default {
  namespaced: true,
  state: {
    musicUrl: null,
    picUrl: "",
    songName: "",
    artistsName: "",
    musicIds: getLocalStrorage(),
    musicInfoArr: [], //歌单里面的歌曲列表展示
    num: Number,
  },
  getters: {},
  mutations: {
    GetMusicUrl(state, musicUrl) {
      if (musicUrl === null) {
        Vue.prototype.$message.warning("该歌曲需要会员用户才能播放!");
        state.musicUrl = null;
      } else {
        state.musicUrl = musicUrl;
        // setCurrentMusicUrl(musicUrl);
      }
    },
    GetMusicInfo(state, object) {
      state.picUrl = object.al.picUrl;
      state.songName = object.name;
      state.artistsName = object.ar[0].name;
    },
    getMusicIdNum(state, num) {
      state.num = num;
    },
    //处理歌单里的歌曲id数组
    GetPlayListInfo(state, [musicIdsarr, musicInfoArr]) {
      state.musicIds = musicIdsarr;
      state.musicInfoArr = musicInfoArr;
      setLocalStrorage(musicIdsarr);
    },
  },
  actions: {
    //获取歌曲url播放地址
    getMusicUrl(context, id) {
      getMusicUrl(id).then((res) => {
        console.log("1111111", res);
        context.commit("GetMusicUrl", res.data.data[0].url);
      });
    },
    //获取歌曲详细信息
    getMusicInfo(context, ids) {
      getMusicInfo(ids).then((res) => {
        context.commit("GetMusicInfo", res.data.songs[0]);
        localStorage.setItem("musicInfo", res.data.songs[0]);
      });
    },
    //获取歌单里的歌曲id数组
    async getPlaylistInfo(context, idNumObj) {
      const res = await getSongList(idNumObj.id);
      let musicIdsarr = [];
      let musicInfoArr = [];
      res.data.playlist.trackIds.map((item) => {
        musicIdsarr.push(item.id);
      });
      //切换歌单时，因为store中的数组id
      getMusicInfo(musicIdsarr.join(",")).then((song) => {
        song.data.songs.map((item) => {
          item.num = idNumObj.num++;
          musicInfoArr.push(item);
        });
      });
      context.commit("GetPlayListInfo", [musicIdsarr, musicInfoArr]);
    },
    //获取我喜欢的歌曲
    async getMyLoveMusicInfo(context, idNumObj) {
      const res = await getMyLoveMusic(idNumObj.userId);
      console.log(res.data);
      let myLoveMusicIdArr = res.data.ids;

      let musicInfoArr = [];
      //切换歌单时，因为store中的数组id
      getMusicInfo(myLoveMusicIdArr.join(",")).then((song) => {
        song.data.songs.map((item) => {
          item.num = idNumObj.num++;
          musicInfoArr.push(item);
        });
      });
      context.commit("GetPlayListInfo", [myLoveMusicIdArr, musicInfoArr]);
    },
    //获取最新音乐的id变成数组
    getLatestMusicIds(context, latestMusicArr) {
      let latestMusicarr = [];
      latestMusicArr.map((item) => {
        latestMusicarr.push(item.id);
      });
      // setLocalStrorage(latestMusicarr);
      context.commit("GetPlayListInfo", latestMusicarr);
    },
    //切换上一首改变num的值
    getMusicIdNumDecrease(context, num) {
      let number = num - 1;
      context.commit("getMusicIdNum", number);
    },
    //切换下一首改变num的值
    getMusicIdNumAdd(context, num) {
      let number = num + 1;
      context.commit("getMusicIdNum", number);
    },
  },
};
