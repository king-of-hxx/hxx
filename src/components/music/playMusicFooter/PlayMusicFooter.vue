<template>
  <div class="play_box">
    <div class="play_left">
      <div class="image">
        <img :src="picUrl==''? musicPic : picUrl" alt="">
        <div class="image_mask">
          <i class="el-icon-arrow-up"></i>
        </div>
      </div>
      <div class="song_title" v-show="songName">
        <div>
          <span>{{songName}}</span>
          <i class="fa fa-heart-o fa-lg" v-show="!isLove" @click="cancelLoveMusic"></i>
          <i class="fa fa-heart fa-lg" v-show="isLove" @click="getLoveMusic" style="color:red"></i>
        </div>
        <span>{{artistsName}}</span>
      </div>
    </div>
    <div class="play_control">
      <div class="icon_group">
        <img class="pre" @click="playPreMusic" src="../../../assets/images/music_pre.png">
        <img class="play" v-show="!isplayStatus" @click="playMusic" src="../../../assets/images/music_play.png">
        <img class="play" v-show="isplayStatus" @click="pauseMusic" src="../../../assets/images/music_stop.png">
        <img class="next" @click="playNextMusic" src="../../../assets/images/music_next.png">
      </div>
      <div class="play_progress">
        <span>{{musicDuration | currentTime}}</span>
        <div class="progress" @mousedown="isChange=true" @mouseup="isChange=false">
          <el-slider v-model="musicDuration" @change="changeMusicProgress" :show-tooltip="false" :max="totalDuration"></el-slider>
        </div>
        <span>{{totalDuration | totatime}}</span>
      </div>
    </div>
    <div class="play_right">
      <span style="border:1px solid black;padding:0px 10px">标准</span>
      <div class="voice_box">
        <div style="width:25px;height:25px;margin-top:5px">
          <i v-show="!isMute" @click="getVoiceMute" class="fa fa-volume-up fa-lg"></i>
          <i v-show="isMute" @click="getVoiceMute" class="fa fa-volume-down fa-lg"></i>
        </div>
        <div class="voice">
          <el-slider v-model="voice" vertical :show-tooltip="false" height="60px" size="mini" @change="voiceChange"></el-slider>
        </div>
      </div>
      <i class="el-icon-s-data"></i>
      <i class="el-icon-close-notification"></i>
      <i class="el-icon-s-unfold"></i>
    </div>
    <audio :src="musicUrl" autoplay class="play_music_audio" @canplay="getTotalDuration" @timeupdate="timeUpdate" ref="audio"></audio>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { timeFormat } from "@/common/uctil"
// import { getCurrentMusicUrl } from "@/utils/localStrorage";
export default {
  components: {
  },
  data() {
    return {
      musicPic: require('@/assets/images/error_img.jpg'),
      isLove: true,
      isplayStatus: false, //播放状态
      musicDuration: 0, //音乐当前播放时间
      totalDuration: 0, //总时长 默认先给个100
      isUrl: false, //设置无歌曲时进度条不可拖动
      voice: 100, //音量
      isMute: false,//是否静音
      debace: true, //简单防抖
      isChange: false //是否被拖动
    }
  },
  computed: {
    ...mapState('playListDetail', ['musicUrl', 'picUrl', 'songName', 'artistsName', 'num', 'musicIds']),
  },
  //利用过滤器将正在播放的当前时间的int型的秒数转化为时分秒格式
  filters: {
    currentTime(value) {
      return timeFormat(value);
    },
    totatime(value) {
      return timeFormat(value);
    }
  },

  watch: {
    // 监听刚进来有没有歌曲url，有就显示播放
    musicUrl: {
      handler(musicUrl) {
        if (musicUrl == null) {
          this.isplayStatus = false
        } else {
          this.isplayStatus = true
        }
      },
      immediate: true
    }
  },
  mounted() {
    this.changeMusicProgress()
    console.log(this.$store.state);
  },
  methods: {
    //切换上一首歌曲
    playPreMusic() {
      if (this.num > 0) {
        this.$store.dispatch('playListDetail/getMusicIdNumDecrease', this.num)
        this.$store.dispatch('playListDetail/getMusicUrl', this.musicIds[this.num]);
        this.$store.dispatch('playListDetail/getMusicInfo', this.musicIds[this.num])
        console.log(this.num);
      } else {
        this.$message.warning('亲，没有音乐可播放了哦~')
        this.isplayStatus = false
      }
    },
    //切换下一首歌曲
    playNextMusic() {
      if (this.musicIds.length > this.num + 1) {
        this.$store.dispatch('playListDetail/getMusicIdNumAdd', this.num)
        this.$store.dispatch('playListDetail/getMusicUrl', this.musicIds[this.num]);
        this.$store.dispatch('playListDetail/getMusicInfo', this.musicIds[this.num])
        console.log(this.num);
      } else {
        this.$message.warning('亲，没有音乐可播放了哦~')
        this.isplayStatus = false
      }
    },
    playMusic() {
      this.isplayStatus = true
      this.$refs.audio.play()
    },
    pauseMusic() {
      this.isplayStatus = false
      this.$refs.audio.pause()
    },
    getLoveMusic() {
      this.isLove = !this.isLove
    },
    cancelLoveMusic() {
      this.isLove = !this.isLove
    },
    getTotalDuration() {
      //获取歌曲总时间
      this.totalDuration = this.$refs.audio.duration
    },
    timeUpdate() {
      if (this.isChange == true) return
      //获取歌曲当前播放的时间
      this.musicDuration = this.$refs.audio.currentTime
      //自动播放歌曲
      if (this.musicDuration >= this.totalDuration) {
        this.playNextMusic()
      }
    },
    //拖动进度条
    changeMusicProgress() {
      if (this.totalDuration == 0) return
      //将自行推拽的时间赋给当前播放的时间达到自行拖拽的效果
      this.$refs.audio.currentTime = this.musicDuration
      this.isChange = false
    },
    voiceChange() {
      this.$refs.audio.volume = this.voice / 100
      // console.log(this.$refs.audio.volume);
      if (this.voice == 0) {
        this.isMute = true
      } else {
        this.isMute = false
      }
    },
    getVoiceMute() {
      if (this.isMute) {
        this.isMute = false
      } else {
        this.isMute = true
        this.voice = 0
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.play_box {
  width: 100%;
  height: 70px;
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
      width: 50px;
      height: 50px;
      border-radius: 5px;
      position: relative;
      cursor: pointer;
      img {
        @extend .image;
      }
      .el-image {
        @extend .image;
        .image-slot {
          i {
            font-size: 4rem;
          }
        }
      }
      .image_mask {
        @extend .image;
        display: none;
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
      display: block;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .song_title {
      height: 70px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-left: 10px;
      div {
        font-size: 1.3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          white-space: nowrap;
        }
        i {
          margin-left: 10px;
          cursor: pointer;
        }
      }
    }
  }
  .play_control {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-around;
    align-items: center;
    // border: 1px solid red;
    .icon_group {
      height: 35px;
      img {
        height: 35px;
        width: 35px;
        border-radius: 50%;
        cursor: pointer;
      }
      img:nth-child(2),
      img:nth-child(3) {
        margin: 0px 20px;
      }
    }
    .play_progress {
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      // border: 1px solid red;
      .progress {
        width: 75%;
        // 修改滑块的默认颜色
        /deep/ .el-slider__bar {
          background: #fc0606;
        }
        //修改滑块上按钮的边框
        /deep/ .el-slider__button {
          border: 2px solid #fc0606;
        }
        /deep/ .el-slider__button-wrapper {
          z-index: 10;
        }
      }
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
        bottom: 30px;
        display: none;
        //修改声音的颜色
        /deep/ .el-slider__bar {
          background: #fc0606;
        }
        //修改滑块上按钮的边框
        /deep/ .el-slider__button {
          border: 2px solid #fc0606;
          width: 10px;
          height: 10px;
        }
      }
    }
    .voice_box:hover .voice {
      display: block;
    }
    i {
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
}
</style>
