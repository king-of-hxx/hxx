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
    redirect: '/music/findmusic',
    name: 'Music',
    component: () => import('../views/Music.vue'),
    children: [{
        path: 'findmusic',
        name: 'FindMusic',
        redirect: '/music/findmusic/personalrecommend',
        component: () => import('@/views/musicMenu/findMusic/findMusic.vue'),
        children: [{
            path: 'personalrecommend',
            name: 'PersonalRecommend',
            component: () => import('@/views/musicMenu/findMusic/PersonalRecommendation.vue'),
          },
          {
            path: 'songlist',
            name: 'SongList',
            component: () => import('@/views/musicMenu/findMusic/SongList.vue')
          },
          {
            path: 'leaderboard',
            name: 'Leaderboard',
            component: () => import('@/views/musicMenu/findMusic/Leaderboard.vue')
          }
        ]
      },
      {
        path: 'video',
        name: 'Video',
        component: () => import('@/views/musicMenu/Video.vue')
      },
      {
        path: 'friend',
        name: 'Friend'
      },
      {
        path: 'livestreaming',
        name: 'Livestreaming'
      },
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