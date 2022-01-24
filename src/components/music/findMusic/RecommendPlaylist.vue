<template>
  <div class="recommend_playlist">
    <div class="title">
      <h5>推荐歌单</h5>
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="playlist">
      <el-col :span="4" v-for="(item, index) in recommendPlaylist" :key="index" @click.native="toRecommendPlaylistInfo(item.id)">
        <el-card :body-style="{ padding: '0px'}">
          <img :src="item.picUrl" class="image">
          <div class="play_volume">
            <i class="el-icon-headset" style="paddingTop: 4px;paddingLeft:15px"></i>
            <span>{{item.playCount>10000 ? (item.playCount/10000).toFixed() +'万' : item.playCount}}</span>
          </div>
          <div class="icon">
            <i class="fa fa-play-circle-o fa-3x"></i>
          </div>
          <span class="music_describe">{{item.name}}</span>
          <div class="playlist_mask"></div>
        </el-card>
      </el-col>
    </div>
  </div>
</template>

<script>
import { getFindMusicRecommend } from "@/apis/findMusic/findMusic"
export default {
  name: 'RecommendPlaylist',
  data() {
    return {
      recommendPlaylist: []
    };
  },
  created() {
    getFindMusicRecommend().then(res => {
      this.recommendPlaylist = res.data.result;
    })
  },
  methods: {
    toRecommendPlaylistInfo(id) {
      this.$router.push({
        name: 'PlayListInfo',
        query: {
          id,
        },
      })
      // console.log(id);
    }
  },
};
</script>

<style lang="scss" scoped>
.recommend_playlist {
  margin-bottom: 50px;
  .title {
    display: flex;
    font-size: 1.5rem;
    margin: 15px 0px;
  }
  .playlist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .el-col {
      width: 17%;
      border-radius: 10px;
      margin-bottom: 15px;
      .el-card {
        position: relative;
        cursor: pointer;
        .image {
          width: 100%;
          display: block;
        }
        .play_volume {
          width: 80px;
          height: 14px;
          position: absolute;
          padding-top: 1px;
          top: 0;
          right: 0;
          font-size: 12px;
          color: #fff;
          display: flex;
          justify-content: space-evenly;
        }
        .icon {
          position: absolute;
          bottom: 22%;
          right: 10px;
          color: rgb(230, 5, 5);
          cursor: pointer;
          transform: translateX(130%);
          transition: transform 0.3s;
        }
        .music_describe {
          display: inline-block;
          width: 100%;
          height: 45px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .playlist_mask {
          width: 100%;
          height: 25%;
          //   border: 1px solid red;
          position: absolute;
          left: 0;
          top: 0;
          background: linear-gradient(to bottom, #000000, #9e9c9c);
          opacity: 0.4;
          transform: translateY(-100%);
          transition: transform 0.5s;
        }
      }
      .el-card:hover .playlist_mask {
        transform: translateY(0);
      }
      .el-card:hover .icon {
        transform: translateX(0);
      }
    }
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both;
  }
}
</style>