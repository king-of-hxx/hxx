<template>
  <div>
    <swiper></swiper>
    <recommend-playlist></recommend-playlist>
    <exclusive-music></exclusive-music>
    <latest-music></latest-music>
    <recommend-MV></recommend-MV>
  </div>
</template>
<script>
import Swiper from '@/components/music/findMusic/Swiper.vue';
import RecommendPlaylist from '@/components/music/findMusic/RecommendPlaylist.vue';
import ExclusiveMusic from '@/components/music/findMusic/ExclusiveMusic.vue';
import LatestMusic from '@/components/music/findMusic/LatestMusic.vue';
import RecommendMV from '@/components/music/findMusic/RecommendMV.vue';
export default {
  name: 'PersonalRecommend',
  components: {
    Swiper,
    RecommendPlaylist,
    ExclusiveMusic,
    LatestMusic,
    RecommendMV
  },
  data() {
    return {}
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
</style>
