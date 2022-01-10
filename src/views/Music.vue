<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-12-23 17:05:03
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-24 09:23:28
-->
<template>
  <div class="main">
    <div class="back-img">
      <img src="../assets/images/music_bg.jpg" alt="404" class="images" />
    </div>
    <div id="music_box">
      <music-header class="header"></music-header>
      <div style="display:flex;height:660px">
        <music-left-bar></music-left-bar>
        <keep-alive>
          <div style="width:100%;overflow:auto">
            <router-view></router-view>
          </div>
        </keep-alive>
      </div>
      <play-music-footer></play-music-footer>
    </div>
  </div>
</template>

<script>
import MusicHeader from '@/components/music/findMusic/MusicHeader.vue';
import MusicLeftBar from '@/components/music/findMusic/MusicLeftBar.vue';
import PlayMusicFooter from '@/components/music/playMusicFooter/PlayMusicFooter.vue';
export default {
  name: "musicBox",
  components: {
    MusicHeader,
    MusicLeftBar,
    PlayMusicFooter
  },
  data() {
    return {
    };
  },
  mounted() {
    this.moveTo()
  },
  methods: {
    //音乐盒可移动功能
    moveTo() {
      let header = document.querySelector('.header')
      let musicBox = document.querySelector('#music_box')
      header.addEventListener('mousedown', function (e) {
        let leftX = e.pageX - musicBox.offsetLeft
        let topY = e.pageY - musicBox.offsetTop
        document.addEventListener('mousemove', move);
        function move(e) {
          musicBox.style.left = e.pageX - leftX + 'px'
          musicBox.style.top = e.pageY - topY + 'px'
          console.log(musicBox.style.top);
        }
        document.addEventListener('mouseup', function () {
          document.removeEventListener('mousemove', move)
        })
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .back-img {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    &img {
      width: 100%;
    }
    .images {
      width: 100vw;
      height: 100vh;
      filter: blur(30px);
    }
  }
  #music_box {
    width: 70%;
    margin: 0 auto;
    // margin-top: 5px;
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    .header {
      cursor: move;
    }
  }
}
</style>
