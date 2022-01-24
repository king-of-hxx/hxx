<template>
  <div class="music_content">
    <div class="title">
      <find-music-header></find-music-header>
    </div>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <el-backtop target=".content" :bottom="90">
        <div style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }">
          UP
        </div>
      </el-backtop>
      <footer>
        <i class="el-icon-arrow-up"></i>
        <!-- <el-button type="text" @click="backTop">回到顶部</el-button> -->
      </footer>
    </div>
  </div>
</template>
<script>
import FindMusicHeader from '@/components/music/findMusic/FindMusicHeader.vue';
export default {
  name: 'FindMusic',
  components: {
    FindMusicHeader,
  },
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.music_content {
  width: 100%;
  padding-left: 30px;
  .content {
    height: 495px;
    overflow-x: auto;
    // border: 1px solid red;
    footer {
      width: 30%;
      font-size: 2rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // border: 1px solid red;
      i {
        animation: iconMove 2s infinite;
      }
      .el-button {
        font-size: 1.1rem;
      }
    }
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 2px solid red;
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    font-size: 1.5rem;
  }
  .el-menu-item {
    font-size: 1rem;
    color: black;
  }
  @keyframes iconMove {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
}
</style>