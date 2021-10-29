<template>
  <div class="recommend_playlist">
    <div class="title">
      <h5>听听</h5>
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="playlist">
      <el-col :span="4" v-for="(o, index) in 5" :key="index">
        <el-card :body-style="{ padding: '0px'}">
          <img src="../../assets/images/girl.png" class="image">
          <div class="play_volume">
            <span>直播中</span>
          </div>
          <div class="hot">
            <i class="fa fa-fire"></i>
            <span>112</span>
          </div>
          <div class="footer">
            <span>好吃的汉堡好哈哈</span>
            <div class="footer_author">
              <img src="../../assets/images/girl.png" alt="">
              <span>hahhahahaahaha</span>
            </div>
          </div>
          <div class="playlist_mask">
            <ul>
              <li></li>
            </ul>
          </div>
        </el-card>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendPlaylist',
  data() {
    return {

    };
  },
  created() {

  },
  methods: {
    toListPage() {

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
      width: 17%;
      .el-card {
        position: relative;
        cursor: pointer;
        .image {
          width: 100%;
          display: block;
        }
        .play_volume {
          width: 50px;
          height: 23px;
          line-height: 23px;
          border-bottom-right-radius: 15px;
          position: absolute;
          padding-top: 1px;
          top: 0px;
          left: 0;
          font-size: 12px;
          background-color: red;
          color: #fff;
          display: flex;
          justify-content: space-evenly;
          z-index: 1;
        }
        .hot {
          width: 50px;
          height: 23px;
          line-height: 23px;
          position: absolute;
          bottom: 23px;
          right: 5px;
          font-size: 15px;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          z-index: 1;
        }
        .playlist_mask {
          width: 100%;
          height: 40%;
          //   border: 1px solid red;
          position: absolute;
          left: 0;
          top: 0;
          background: rgb(224, 224, 224);
          overflow: hidden;
          transform: translateY(-100%);
          transition: transform 0.5s;
          ul {
            display: flex;
            justify-content: center;
            li {
              width: 70px;
              height: 70px;
              border: 5px solid white;
              border-radius: 50%;
              margin-top: 20px;
            }
          }
        }
        .footer {
          display: flex;
          flex-direction: column;
          span:first-child {
            font-size: 1.2rem;
            margin-bottom: 10px;
            margin-top: 10px;
          }
          span:nth-child(2) {
            color: rgb(119, 118, 117);
          }
          .footer_author {
            // display: flex;
            // align-items: center;
            img {
              width: 25px;
              height: 25px;
              border-radius: 50%;
              margin-right: 10px;
            }
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
