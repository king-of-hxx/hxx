<template>
  <div class="music_title">
    <div class="title">
      <el-menu :default-active="this.$route.path" class="el-menu-demo" mode="horizontal" :router="true" @select="handleSelect">
        <!-- <el-menu-item index="1">个性推荐</el-menu-item>
        <el-menu-item index="2">歌单</el-menu-item>
        <el-menu-item index="3">排行榜</el-menu-item>
        <el-menu-item index="4">歌手</el-menu-item> -->
        <el-menu-item v-for="(item,index) in titleList" :key="index" :index="item.path">{{item.title}}</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
// import MusicFindRecommend from '@/components/music/MusicFindRecommend.vue';
export default {
  components: {

  },
  data() {
    return {
      titleList: [
        { path: '/music/findmusic/personalrecommend', title: '个性推荐' },
        { path: '/music/findmusic/songlist', title: '歌单' },
        { path: '/music/findmusic/leaderboard', title: '排行榜' },
        { path: '/music/findmusic/singer', title: '歌手' },
        { path: '/music/findmusic/latestmusic', title: '最新音乐' }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style lang="scss" scoped>
.music_title {
  width: 100%;
  padding: 5px;
  // border: 1px solid red;
  .title {
    margin-bottom: 20px;
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 2px solid red;
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .el-menu-item {
    font-size: 1rem;
    color: black;
  }
}
</style>