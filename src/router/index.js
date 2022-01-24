import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  undefined;
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/music",
    redirect: "/music/findMusic",
    name: "Music",
    component: () => import("../views/Music.vue"),
    children: [
      {
        //发现音乐
        path: "findMusic",
        name: "FindMusic",
        redirect: "/music/findMusic/personalRecommend",
        component: () => import("@/views/musicMenu/findMusic/findMusic.vue"),
        children: [
          {
            path: "personalRecommend",
            name: "PersonalRecommend",
            component: () =>
              import("@/views/musicMenu/findMusic/PersonalRecommendation.vue"),
          },
          {
            path: "songList",
            name: "SongList",
            component: () => import("@/views/musicMenu/findMusic/SongList.vue"),
          },
          {
            path: "leaderBoard",
            name: "Leaderboard",
            component: () =>
              import("@/views/musicMenu/findMusic/Leaderboard.vue"),
          },
        ],
      },
      //歌单详情
      {
        path: "playListInfo",
        name: "PlayListInfo",
        redirect: "/music/playListInfo/songLists",
        component: () => import("@/views/musicMenu/PlayListInfo.vue"),
        children: [
          {
            path: "songLists",
            name: "SongLists",
            component: () =>
              import("@/components/music/songDetail/ShowSongList.vue"),
          },
        ],
      },
      //更多精彩评论
      {
        path: "moreComment",
        name: "MoreComment",
        component: () =>
          import("@/components/music/songDetail/MoreComment.vue"),
      },
      //视频
      {
        path: "video",
        name: "Video",
        component: () => import("@/views/musicMenu/Video.vue"),
      },
      //朋友
      {
        path: "friend",
        name: "Friend",
      },
      //直播
      {
        path: "liveStreaming",
        name: "Livestreaming",
      },
      //私人FM
      {
        path: "myselfFM",
        name: "MyselfFM",
      },
      //我喜欢
      {
        path: "myLove",
        name: "MyLoveMusic",
        component: () => import("@/views/musicMenu/myLoveMusic.vue"),
      },
      //NotFound
      {
        path: "notFound",
        name: "NotFound",
        component: () => import("@/components/NotFound.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
