<template>
  <div class="play_box">
    <div class="play_left">
      <div class="image">
        <img src="../../../assets/images/auth.jpg" alt="">
        <div class="image_mask">
          <i class="el-icon-arrow-up"></i>
        </div>
      </div>
      <div class="song_title">
        <div>
          <span>你爱我吗</span>
          <i class="fa fa-heart-o fa-lg" v-show="!isLove" @click="cancelLoveMusic"></i>
          <i class="fa fa-heart fa-lg" v-show="isLove" @click="getLoveMusic" style="color:red"></i>
        </div>
        <span>很爱很爱你</span>
      </div>
    </div>
    <div class="play_control">
      <div class="icon_group">
        <img class="pre" src="../../../assets/images/music_pre.png">
        <img class="play" v-show="isplay" @click="playMusic" src="../../../assets/images/music_play.png">
        <img class="play" v-show="!isplay" @click="pauseMusic" src="../../../assets/images/music_stop.png">
        <img class="next" src="../../../assets/images/music_next.png">
      </div>
      <div class="play_progress">
        <span>{{current}}</span>
        <vue-slider v-bind="setting" v-model="progress" style="margin:0px 10px" />
        <span>{{end}}</span>
      </div>
    </div>
    <div class="play_right">
      <span style="border:1px solid black;padding:0px 10px">标准</span>
      <div class="voice_box">
        <i class="fa fa-volume-up fa-lg"></i>
        <div class="voice">
          <el-slider v-model="voice" vertical height="60px" size="mini" @change="volumeChange"></el-slider>
        </div>
      </div>
      <i class="el-icon-s-data"></i>
      <i class="el-icon-close-notification"></i>
      <i class="el-icon-s-unfold"></i>
    </div>
    <audio src="" autoplay class="play_music_audio" ref="audio"></audio>
  </div>
</template>
<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
export default {
  components: {
    VueSlider
  },
  data() {
    return {
      isLove: true,
      isplay: true,
      progress: 0,
      current: '00:00',
      end: '00:00',
      setting: {
        width: 430,
        tooltip: false,
        dotSize: 13,
        processStyle: {
          'background-color': 'rgb(232,60,60)'
        },
        min: 0,
        max: 200,
        clickable: true,
        speed: 1.0
      },
      voice: 0
    }
  },
  methods: {
    playMusic() {
      this.isplay = !this.isplay
    },
    pauseMusic() {
      this.isplay = !this.isplay
    },
    getLoveMusic() {
      this.isLove = !this.isLove
    },
    cancelLoveMusic() {
      this.isLove = !this.isLove
    }
  }
}
</script>
<style lang="scss" scoped>
.play_box {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgb(167, 166, 166);
  .play_left {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    // border: 1px solid red;
    .image {
      width: 70px;
      height: 70px;
      border-radius: 5px;
      position: relative;
      cursor: pointer;
      img {
        @extend .image;
      }
      .image_mask {
        @extend .image;
        transform: translateX(-150%);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.5);
        i {
          color: white;
          font-size: 2rem;
          opacity: 0.7;
        }
      }
    }
    .image:hover .image_mask {
      transform: translateX(0);
    }
    .song_title {
      height: 70px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-left: 10px;
      div {
        font-size: 1.3rem;
        i {
          margin-left: 10px;
          cursor: pointer;
        }
      }
    }
  }
  .play_control {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // border: 1px solid red;
    .icon_group {
      img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        cursor: pointer;
      }
      img:nth-child(2),
      img:nth-child(3) {
        margin: 0px 20px;
      }
    }
    .play_progress {
      display: flex;
    }
  }
  .play_right {
    width: 20%;
    height: 100%;
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    .voice_box {
      position: relative;
      cursor: pointer;
      .voice {
        position: absolute;
        left: -9px;
        bottom: 25px;
        transform: translateY(200%);
      }
    }
    .voice_box:hover .voice {
      transform: translateY(0);
    }
    i {
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
}
</style>
