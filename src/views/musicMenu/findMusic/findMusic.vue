<template>
  <div class="music_content">
    <div class="title">
      <find-music-header></find-music-header>
    </div>
    <div class="content">
      <router-view></router-view>
      <footer>
        <i class="el-icon-arrow-up"></i>
        <el-button type="text" @click="backTop">回到顶部</el-button>
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
    backTop() {
      let content = document.querySelector('.content')
      //用定时器设置返回顶部的动画
      const timeTop = setInterval(() => {
        content.scrollTop -= 5;   //content.scrollTop是元素距离顶部的距离
        if (content.scrollTop <= 0) {
          clearInterval(timeTop);
        }
      }, 5);
    }
  }
}
</script>
<style lang="scss" scoped>
.music_content {
  width: 100%;
  padding: 0px 30px;
  // border: 1px solid red;
  .content {
    height: 600px;
    overflow: auto;
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