import Vue from "vue";
import Vuex from "vuex";
import login from "./modules/login";
import recommendPlaylist from "./modules/recommendPlaylist";
import playListDetail from "./modules/playListDetail";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    recommendPlaylist,
    playListDetail,
  },
});
