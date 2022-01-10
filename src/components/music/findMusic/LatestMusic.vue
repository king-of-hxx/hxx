<template>
  <div class="latest_music">
    <div class="title">
      <h5>最新音乐</h5>
      <i class="el-icon-arrow-right"></i>
    </div>
    <div style="display:flex;flex-wrap:wrap;justify-content:space-between">
      <div class="music_item" v-for="(item,index) in latestMusicList" :key="index" @dblclick="playLatestMusic(item.id)">
        <div class="item_left">
          <img :src="item.picUrl" alt="">
          <i class="fa fa-play-circle-o fa-2x"></i>
        </div>
        <div class="item_right">
          <span>{{item.song.name}}</span>
          <div class="author">
            <span class="sign">SQ</span>
            <span class="sign">
              <span>MV</span>
              <i class="el-icon-caret-right"></i>
            </span>
            <span>{{item.song.artists[0].name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getLatestMusic } from "@/apis/findMusic"
// import { getMusicUrl } from "@/apis/getMusicUrl"
export default {
  data() {
    return {
      latestMusicList: [],
    }
  },
  created() {
    getLatestMusic().then(res => {
      this.latestMusicList = res.data.result
    })
  },
  methods: {
    playLatestMusic(id) {
      this.$store.dispatch('latestMusic/getLatestMusicUrl', id);
      this.$store.dispatch('latestMusic/getLatestMusicInfo', id)
    }
  }
}
</script>
<style lang="scss" scoped>
.latest_music {
  margin-bottom: 50px;
  .title {
    display: flex;
    font-size: 1.5rem;
    margin: 15px 0px;
  }
  .music_item {
    width: 32%;
    height: 60px;
    cursor: pointer;
    border-radius: 10px;
    margin-bottom: 20px;
    display: flex;
    &:hover {
      background-color: rgb(221, 219, 219);
    }
    // border: 1px solid red;
    .item_left {
      width: 58px;
      margin-right: 8px;
      position: relative;
      img {
        border-radius: 5px;
        width: 60px;
        height: 60px;
      }
      .fa {
        color: aqua;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -15px;
        margin-left: -15px;
      }
    }
    .item_right {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      .author {
        color: rgb(194, 190, 190);
        .sign {
          color: red;
          margin-right: 5px;
          border: 1px solid red;
        }
      }
    }
  }
}
</style>