import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/music',
    redirect: '/music/findMusic',
    name: 'Music',
    component: () => import('../views/Music.vue'),
    children: [{
        //发现音乐
        path: 'findMusic',
        name: 'FindMusic',
        redirect: '/music/findMusic/personalRecommend',
        component: () => import('@/views/musicMenu/findMusic/findMusic.vue'),
        children: [{
            path: 'personalRecommend',
            name: 'PersonalRecommend',
            component: () => import('@/views/musicMenu/findMusic/PersonalRecommendation.vue'),
          },
          {
            path: 'songList',
            name: 'SongList',
            component: () => import('@/views/musicMenu/findMusic/SongList.vue')
          },
          {
            path: 'leaderBoard',
            name: 'Leaderboard',
            component: () => import('@/views/musicMenu/findMusic/Leaderboard.vue')
          }
        ]
      },
      {
        path: 'playListInfo',
        name: 'PlayListInfo',
        component: () => import('@/views/musicMenu/PlayListInfo.vue')
      },
      //视频
      {
        path: 'video',
        name: 'Video',
        component: () => import('@/views/musicMenu/Video.vue')
      },
      //朋友
      {
        path: 'friend',
        name: 'Friend'
      },
      //直播
      {
        path: 'liveStreaming',
        name: 'Livestreaming'
      },
      //私人FM
      {
        path: 'myselfFM',
        name: 'MyselfFM'
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router