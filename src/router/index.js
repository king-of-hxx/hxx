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
    path: "/myBlog",
    name: "MyBlog",
    component: () => import("@/views/MyBlog.vue"),
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
            // component: () => import("@/views/musicMenu/findMusic/SongList.vue"),
            component: () => import("@/components/NotFound.vue"),
          },
          //排行榜
          {
            path: "leaderBoard",
            name: "Leaderboard",
            // component: () =>
            //   import("@/views/musicMenu/findMusic/Leaderboard.vue"),
            component: () => import("@/components/NotFound.vue"),
          },
          {
            path: "singer",
            name: "Singer",
            component: () => import("@/components/NotFound.vue"),
          },
          {
            path: "latestMusic",
            name: "LatestMusic",
            component: () => import("@/components/NotFound.vue"),
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
        component: () => import("@/components/NotFound.vue"),
      },
      //朋友
      {
        path: "friend",
        name: "Friend",
        component: () => import("@/components/NotFound.vue"),
      },
      //直播
      {
        path: "liveStreaming",
        name: "Livestreaming",
        component: () => import("@/components/NotFound.vue"),
      },
      //私人FM
      {
        path: "myselfFM",
        name: "MyselfFM",
        component: () => import("@/components/NotFound.vue"),
      },
      //本地与下载
      {
        path: "download",
        name: "Download",
        component: () => import("@/components/NotFound.vue"),
      },
      //最近播放
      {
        path: "recentlyPlayed",
        name: "RecentlyPlayed",
        component: () => import("@/components/NotFound.vue"),
      },
      //我的音乐云盘
      {
        path: "myMusicCloud",
        name: "MyMusicCloud",
        component: () => import("@/components/NotFound.vue"),
      },
      //我的播客
      {
        path: "myPodcast",
        name: "MyPodcast",
        component: () => import("@/components/NotFound.vue"),
      },
      //我的收藏
      {
        path: "collect",
        name: "Collect",
        component: () => import("@/components/NotFound.vue"),
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
      //歌曲搜索
      {
        path: "search/:keywords?",
        name: "Search",
        redirect: { path: "search/searchSongs" },
        component: () => import("@/components/music/MusicHeaderSearch.vue"),
        children: [
          {
            path: "searchSongs",
            name: "SearchSongs",
            component: () =>
              import("@/components/music/searchMusic/searchSongs.vue"),
          },
          {
            path: "searchSinger",
            name: "SearchSinger",
            component: () =>
              import("@/components/music/searchMusic/searchArtists.vue"),
          },
          {
            path: "searchAlbum",
            name: "SearchAlbum",
            component: () =>
              import("@/components/music/searchMusic/searchAlbum.vue"),
          },
          {
            path: "searchVideo",
            name: "SearchVideo",
            component: () =>
              import("@/components/music/searchMusic/searchVideo.vue"),
          },
          {
            path: "searchSongList",
            name: "SearchSongList",
            component: () =>
              import("@/components/music/searchMusic/searchSongList.vue"),
          },
          {
            path: "searchUser",
            name: "SearchUser",
            component: () =>
              import("@/components/music/searchMusic/searchUser.vue"),
          },
        ],
      },
    ],
  },
  //播放mv视频页面
  {
    path: "/MVPlayPage/:id?",
    name: "MVPlayPage",
    component: () => import("@/components/music/MVPlayPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
