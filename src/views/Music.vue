<template>
  <div class="main">
    <div class="back-img">
      <img src="../assets/images/music_bg.jpg" alt="404" class="images" />
    </div>
    <div id="app">
      <music-header></music-header>
      <div style="display:flex;height:720px">
        <music-left-bar></music-left-bar>
        <router-view></router-view>
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
  name: "APP",
  components: {
    MusicHeader,
    MusicLeftBar,
    PlayMusicFooter
  },
  data() {
    return {
    };
  },
  created() {

  },
  methods: {
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
  #app {
    width: 70%;
    margin: 0 auto;
    margin-top: 10px;
    overflow: hidden;
    position: relative;
    background: #fff;
  }
}
</style>
