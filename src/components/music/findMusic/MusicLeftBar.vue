<template>
  <div class="left_bar">
    <el-menu :default-active="this.$route.path" class="el-menu-vertical-demo" active-text-color="#121212" :router="true">
      <el-menu-item index="/music/findMusic/personalRecommend">
        <span>发现音乐</span>
      </el-menu-item>
      <el-menu-item index="/music/video">
        <span>视频</span>
      </el-menu-item>
      <el-menu-item index="/music/friend">
        <span>朋友</span>
      </el-menu-item>
      <el-menu-item index="/music/livestreaming">
        <span>直播</span>
      </el-menu-item>
      <el-menu-item index="/music/myselfFM">
        <span>私人FM</span>
      </el-menu-item>
      <h5 style="padding:10px 20px;opacity: 0.5;">我的音乐</h5>
      <el-menu-item index="/music/download">
        <i class="el-icon-download"></i>
        <span>本地与下载</span>
      </el-menu-item>
      <el-menu-item index="/music/recentlyPlayed">
        <i class="el-icon-pie-chart"></i>
        <span>最近播放</span>
      </el-menu-item>
      <el-menu-item index="/music/myMusicCloud">
        <i class="el-icon-cloudy"></i>
        <span>我的音乐云盘</span>
      </el-menu-item>
      <el-menu-item index="/music/myPodcast">
        <i class="el-icon-service"></i>
        <span>我的播客</span>
      </el-menu-item>
      <el-menu-item index="/music/collect">
        <i class="el-icon-folder"></i>
        <span>我的收藏</span>
      </el-menu-item>
      <el-menu-item index="/music/myLove">
        <i class="fa fa-heart-o fa-lg"></i>
        <span>我喜欢的音乐</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      defaultActive: '',
    }
  },
  methods: {
    // toMyLovePage() {
    //   this.$router.push({
    //     name: 'MyLoveMusic'
    //   })
    // },
    // handleSelect(key, keyPath) {
    //   console.log(key, keyPath);
    // }
  }
}
</script>
<style lang="scss" scoped>
.left_bar {
  width: 250px;
  // border: 1px solid red;
  border-right: 1px solid rgb(192, 191, 191);
  z-index: 0;
  .fa-heart-o {
    margin-right: 10px;
  }
  .el-menu-item.is-active {
    font-size: 1.1rem;
    font-weight: bold;
  }
  .el-menu-vertical-demo {
    display: flex;
    flex-direction: column;
  }
  /deep/ .el-menu-item,
  .el-submenu__title {
    height: 49px;
    line-height: 49px;
  }
}
</style>