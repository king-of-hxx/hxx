<template>
  <div class="main">
    <div class="back-img">
      <img src="@/assets/images/music_bg.jpg" alt="404" class="images" />
    </div>
    <div id="video_box">
      <music-header class="header"></music-header>
      <div class="playMV_box">
        <div class="MV_left">
          <h5>
            <i class="el-icon-arrow-left" @click="()=>{this.$router.go(-1)}"></i>
            <span>MV详情</span>
          </h5>
          <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions"></video-player>
          <div class="MV_info">
            <span class="info_first">
              <img :src="mvInfo.cover" alt="">
              <span>{{artists}}</span>
            </span>
            <span class="info_second">
              <span>{{mvInfo.name}}</span>
              <i v-if="!isShowDes" class="el-icon-caret-bottom" @click="changeIsShow"></i>
              <i v-else class="el-icon-caret-top" @click="changeIsShow"></i>
            </span>
            <span class="info_third">
              <span>发布：{{mvInfo.publishTime}}</span>
              <span>播放：{{mvInfo.playCount>=100000?(mvInfo.playCount/100000).toFixed()+'0'+'万' :mvInfo.playCount}}次</span>
            </span>
            <span v-show="isShowDes" class="info_forth">{{mvInfo.desc}}</span>
          </div>
        </div>
        <div class="MV_right">
          <h5>相关推荐</h5>
          <ul>
            <li v-for="item in mvs" :key="item.id" @click="playRelateMv(item.id)">
              <img :src="item.cover" alt="">
              <div class="relateMvInfo">
                <span>{{item.name}}</span>
                <span>by {{item.artistName}}</span>
              </div>
              <span class="play_count">
                <i class="fa fa-play"></i>
                <span>{{item.playCount>=100000?(item.playCount/100000).toFixed()+'0'+'万' :item.playCount}}</span>
              </span>
              <span class="time">{{item.duration | time}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { timeFormat } from '@/utils/util'
import MusicHeader from '@/components/music/findMusic/MusicHeader.vue';
export default {
  name: "MVPlayPage",
  components: {
    MusicHeader,
  },
  data() {
    return {
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        autoplay: false, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4", // 类型
          src: `${this.$store.state.playMvDetail.mvUrl}`// url地址
        }],
        poster: `${this.$store.state.playMvDetail.mvInfo.cover}`, // 封面地址
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true // 是否显示全屏按钮
        }
      },
      isShowDes: true
    };
  },
  computed: {
    ...mapState('playMvDetail', ['mvInfo', 'mvUrl', 'mvs']),
    artists() {
      let newArr = []
      this.mvInfo.artists.map(item => {
        newArr.push(item.name)
      })
      return newArr.join(' / ')
    }
  },
  watch: {
    playerOptions: {
      handler(a, b) {
        console.log('1111111111', a, b);
        // this.playerOptions['sources'][0]['src'] = this.mvUrl
      },
      deep: true,
    }
  },
  filters: {
    time(value) {
      return timeFormat(value)
    }
  },
  mounted() {
  },
  methods: {
    ...mapActions('playMvDetail', ['getMvInfo', 'getMvUrl', 'getRelateMv']),
    changeIsShow() {
      this.isShowDes = !this.isShowDes
    },
    //点击播放相关推荐mv
    playRelateMv(id) {
      this.getMvInfo(id)
      this.getMvUrl(id)
      this.getRelateMv(id)
    }
  },
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;
  height: 100vh;
  // overflow: auto;
  // padding: 10px 0px;
  .back-img {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    height: 100vh;
    &img {
      width: 100%;
    }
    .images {
      width: 100vw;
      height: 100vh;
      filter: blur(30px);
    }
  }
  #video_box {
    width: 70%;
    margin: 0 auto;
    // border: 1px solid red;
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    .playMV_box {
      height: 650px;
      display: flex;
      padding: 20px;
      justify-content: space-between;
      //   border: 1px solid red;
      .MV_left {
        width: 65%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        // border: 1px solid red;
        h5 {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          .el-icon-arrow-left {
            font-size: 25px;
            cursor: pointer;
          }
          span {
            font-size: 16px;
          }
        }
        .video-player {
          height: 378px;
          box-shadow: 0px 0px 10px rgb(106, 5, 236);
        }
        .MV_info {
          height: 170px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .info_first {
            height: 90px;
            display: flex;
            align-items: center;
            color: rgb(117, 117, 117);
            // border: 1px solid red;
            img {
              height: 60px;
              width: 60px;
              margin-right: 10px;
              border-radius: 50%;
            }
          }
          .info_second {
            font-size: 20px;
            font-weight: 600;
            i {
              cursor: pointer;
            }
          }
          .info_third {
            font-size: 13px;
            color: rgb(170, 169, 169);
            span:nth-child(2) {
              margin-left: 20px;
            }
          }
          .info_forth {
            font-size: 13px;
          }
        }
      }
      .MV_right {
        width: 30%;
        // border: 1px solid red;
        h5 {
          font-size: 16px;
          margin-bottom: 15px;
        }
        ul {
          height: 95%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          li {
            height: 105px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            // border: 1px solid red;
            img {
              height: 100px;
              width: 50%;
              border-radius: 10px;
              box-shadow: 0px 0px 5px green;
            }
            .relateMvInfo {
              width: 47%;
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              span:first-child {
                font-size: 13px;
                color: rgb(88, 87, 87);
              }
              span:nth-child(2) {
                font-size: 13px;
                color: rgb(133, 130, 130);
              }
            }
            .play_count {
              display: flex;
              position: absolute;
              left: 30%;
              top: 10px;
              font-size: 12px;
              color: white;
              .fa-play {
                margin-right: 10px;
              }
            }
            .time {
              position: absolute;
              left: 38%;
              bottom: 10px;
              color: white;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>