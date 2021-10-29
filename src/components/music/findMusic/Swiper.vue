<template>
  <div class="music_recommend">
    <div class="carousel">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="(item,index) in bannerList" :key="index">
          <img :src="item.imageUrl" width="100%" height="200" alt="">
          <span :style="{ backgroundColor: item.titleColor }">{{item.typeTitle}}</span>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import { getFindMusicBanner } from "@/apis/findMusic.js"
export default {
  data() {
    return {
      bannerList: []
    }
  },
  created() {
    getFindMusicBanner().then(res => {
      this.bannerList = res.data.banners
      console.log(res.data.banners.titleColor);
    })
  }
}
</script>
<style lang="scss" scoped>
.music_recommend {
  .carousel {
    position: relative;
    img {
      border-radius: 10px;
    }
    span {
      width: 90px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      position: absolute;
      right: 2px;
      bottom: 2px;
      color: white;
      border-bottom-right-radius: 10px;
      border-top-left-radius: 10px;
      // border: 1px solid red;
    }
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>