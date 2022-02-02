<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-12-23 17:05:03
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-01-31 12:56:27
-->
<template>
  <div class="recommend_playlist">
    <div class="title">
      <h5>独家放送</h5>
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="playlist">
      <el-col :span="7" v-for="(item, index) in exclusiveMusicList" :key="index" @click.native="toPlayMVPage(item.id)">
        <el-card :body-style="{ padding: '0px'}" shadow="always">
          <img :src="item.picUrl" class="image">
          <div class="icon">
            <i class="fa fa-play-circle-o fa-2x" aria-hidden="true"></i>
          </div>
          <span class="music_describe">{{item.name}}</span>
        </el-card>
      </el-col>
    </div>
  </div>
</template>

<script>
import { getExclusiveMusic } from "@/apis/findMusic/findMusic"
import { mapActions } from 'vuex';
export default {
  name: 'ExclusiveMusic',
  data() {
    return {
      exclusiveMusicList: []
    };
  },
  created() {
    getExclusiveMusic().then(res => {
      this.exclusiveMusicList = res.data.result
      // console.log(this.exclusiveMusicList);
    })
  },
  methods: {
    ...mapActions('playMvDetail', ['getMvInfo', 'getMvUrl', 'getRelateMv']),
    async toPlayMVPage(id) {
      await this.getMvInfo(id),
        await this.getMvUrl(id),
        await this.getRelateMv(id),
        await this.$router.push({
          name: "MVPlayPage"
        })
    },
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
      width: 32%;
      .el-card {
        position: relative;
        cursor: pointer;
        .image {
          width: 100%;
          display: block;
        }
        .icon {
          position: absolute;
          top: 5%;
          left: 6px;
          color: white;
          cursor: pointer;
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
