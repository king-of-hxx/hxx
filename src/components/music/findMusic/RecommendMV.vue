<template>
  <div class="recommend_mv">
    <div class="title">
      <h5>推荐MV</h5>
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="playlist">
      <el-col :span="5" v-for="(item, index) in recommendMvList" :key="index" @click.native="playRecommendMv(item.id)">
        <el-card :body-style="{ padding: '0px'}" shadow="always">
          <img :src="item.picUrl" class="image">
          <div class="play_volume">
            <i class="el-icon-headset"></i>
            <span>{{item.playCount}}</span>
          </div>
          <div class="footer">
            <span>{{item.name}}</span>
            <span>{{item.artists[0].name}}</span>
          </div>
          <div class="playlist_mask">
            <span style="opacity: 1">最新热门MV推荐</span>
          </div>
        </el-card>
      </el-col>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import { getRecommendMV } from "@/apis/findMusic/findMusic"
export default {
  data() {
    return {
      recommendMvList: []
    }
  },
  created() {
    getRecommendMV().then(res => {
      this.recommendMvList = res.data.result
    })
  },
  methods: {
    ...mapActions('playMvDetail', ['getMvInfo', 'getMvUrl', 'getRelateMv']),
    async playRecommendMv(id) {
      await this.getMvInfo(id)
      await this.getMvUrl(id)
      await this.getRelateMv(id)
      await this.$router.push({
        name: "MVPlayPage"
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.recommend_mv {
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
      width: 23%;
      .el-card {
        position: relative;
        cursor: pointer;
        .image {
          width: 100%;
          height: 93px;
          display: block;
        }
        .play_volume {
          width: 80px;
          height: 20px;
          position: absolute;
          padding-top: 1px;
          top: 0px;
          right: 0;
          font-size: 16px;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          justify-content: space-evenly;
        }
        .footer {
          display: flex;
          flex-direction: column;
          span:first-child {
            height: 25px;
            font-size: 1.2rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: 10px;
            margin-top: 10px;
          }
          span:nth-child(2) {
            color: rgb(119, 118, 117);
            height: 20px;
          }
        }
        .playlist_mask {
          width: 100%;
          height: 25%;
          position: absolute;
          left: 0;
          top: 0;
          display: flex;
          align-items: center;
          background: black;
          opacity: 0.5;
          transform: translateY(-100%);
          transition: transform 0.5s;
          span {
            color: white;
            opacity: 1;
          }
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