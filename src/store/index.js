import Vue from "vue";
import Vuex from "vuex";
import login from "./modules/login";
import recommendPlaylist from "./modules/recommendPlaylist";
import playListDetail from "./modules/playListDetail";
import searchMusic from "./modules/searchMusic";
import playMvDetail from "./modules/playMvDetail";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    recommendPlaylist,
    playListDetail,
    searchMusic,
    playMvDetail,
  },
});
