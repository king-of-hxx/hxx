<template>
  <div class="left_bar">
    <el-menu :default-active="this.$route.path" class="el-menu-vertical-demo" active-text-color="#121212" :router="true" @select="handleSelect">
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
      <el-menu-item index="6">
        <i class="el-icon-setting"></i>
        <span>本地与下载</span>
      </el-menu-item>
      <el-menu-item index="7">
        <i class="el-icon-setting"></i>
        <span>最近播放</span>
      </el-menu-item>
      <el-menu-item index="8">
        <i class="el-icon-setting"></i>
        <span>我的音乐云盘</span>
      </el-menu-item>
      <el-menu-item index="9">
        <i class="el-icon-setting"></i>
        <span>我的播客</span>
      </el-menu-item>
      <el-menu-item index="10">
        <i class="el-icon-setting"></i>
        <span>我的收藏</span>
      </el-menu-item>
      <el-menu-item index="12">
        <i class="el-icon-setting"></i>
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
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style lang="scss" scoped>
.left_bar {
  width: 250px;
  // border: 1px solid red;
  border-right: 1px solid rgb(192, 191, 191);
  z-index: 0;
  .el-menu-item.is-active {
    font-size: 1.3rem;
    font-weight: bold;
  }
  .el-menu-vertical-demo {
    display: flex;
    flex-direction: column;
  }
}
</style>