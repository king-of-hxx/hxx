import { searchMusic } from "@/apis/search";
import {
  setSearchKeywords,
  getSearchKeywords,
  setLocalStrorage,
  getLocalStrorage,
} from "@/utils/localStrorage";
export default {
  namespaced: true,
  state: {
    keywords: getSearchKeywords(),
    musicInfoArr: [],
    searchids: getLocalStrorage(),
    artists: [],
    album: [],
    videos: [],
    playlists: [],
    userprofiles: [],
  },
  getters: {},
  mutations: {
    GetSearchSongsInfo(state, [searchids, musicInfoArr]) {
      state.searchids = searchids;
      state.musicInfoArr = musicInfoArr;
    },
    GetSearchSingerInfo(state, artists) {
      state.artists = artists;
    },
    GetSearchAlbumInfo(state, album) {
      state.album = album;
    },
    GetSearchVideoInfo(state, videos) {
      state.videos = videos;
    },
    GetSearchSongListInfo(state, playlists) {
      state.playlists = playlists;
    },
    GetSearchUserInfo(state, userprofiles) {
      state.userprofiles = userprofiles;
    },
  },
  actions: {
    //获取搜索单曲
    async getSearchSongs(context, keywords) {
      const res = await searchMusic(keywords, 30, 1);
      let musicInfoArr = res.data.result.songs;
      let searchids = [];
      let newMusicInfoArr = [];
      let num = 0;
      musicInfoArr.map((item) => {
        searchids.push(item.id);
        item.num = num++;
        newMusicInfoArr.push(item);
      });
      // console.log(musicInfoArr);
      setSearchKeywords(keywords);
      setLocalStrorage(searchids);
      context.commit("GetSearchSongsInfo", [searchids, newMusicInfoArr]);
    },
    //获取可能感兴趣的信息    歌手
    async getSearchSinger(context, keywords) {
      const res = await searchMusic(keywords, 30, 100);
      const { artists } = res.data.result;
      // console.log(artists);
      context.commit("GetSearchSingerInfo", artists);
    },
    //获取搜索专辑
    async getSearchAlbum(context, keywords) {
      const res = await searchMusic(keywords, 30, 10);
      const { albums } = res.data.result;
      context.commit("GetSearchAlbumInfo", albums);
    },
    //获取搜索视频
    async getSearchVideo(context, keywords) {
      const res = await searchMusic(keywords, 30, 1014);
      const { videos } = res.data.result;
      context.commit("GetSearchVideoInfo", videos);
    },
    //获取搜索歌单
    async getSearchSongList(context, keywords) {
      const res = await searchMusic(keywords, 30, 1000);
      const { playlists } = res.data.result;
      context.commit("GetSearchSongListInfo", playlists);
    },
    //获取搜索用户
    async getSearchUser(context, keywords) {
      const res = await searchMusic(keywords, 30, 1002);
      const { userprofiles } = res.data.result;
      context.commit("GetSearchUserInfo", userprofiles);
    },
  },
};
