<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2022-01-27 15:58:19
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-01-28 19:59:42
-->
<template>
  <div class="video_box">
    <ul>
      <li v-for="item in videos" :key="item.vid">
        <img :src="item.coverUrl" alt="">
        <div class="video_info">
          <span class="mv">MV</span>
          <span class="title">{{item.title}}</span>
        </div>
        <span class="name">{{item.creator[0].userName}}</span>
        <span class="play_count">
          <i class="fa fa-play"></i>
          <span>{{item.playTime}}</span>
        </span>
        <span class="time">{{item.durationms | time}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { timeFormat } from '@/utils/util'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState('searchMusic', ['videos']),
    // name() {
    //   let nameArr = []
    //   for (let i = 0; i < this.videos.length; i++) {
    //     this.videos[i].creator.map(item => {
    //       nameArr.push(item.userName)
    //     })
    //   }
    //   return nameArr.join('/')
    // }
  },
  filters: {
    time(value) {
      return timeFormat(value)
    }
  },
  mounted() {
    console.log(this.videos);
  }

}
</script>
<style lang="scss" scoped>
.video_box {
  padding: 20px;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      cursor: pointer;
      height: 200px;
      width: 250px;
      margin-right: 20px;
      margin-bottom: 20px;
      // border: 1px solid red;
      position: relative;
      img {
        height: 150px;
        width: 250px;
        border-radius: 15px;
      }
      .video_info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .mv {
          width: 11%;
          height: 18px;
          border: 1px solid red;
          color: red;
        }
        .title {
          width: 87%;
          white-space: nowrap;
          overflow: hidden;
          color: rgb(71, 70, 70);
          text-overflow: ellipsis;
          // border: 1px solid red;
        }
      }
      .name {
        color: rgb(187, 187, 184);
        font-family: Arial, Helvetica, sans-serif;
      }
      .play_count {
        width: 20%;
        display: flex;
        color: white;
        font-size: 13px;
        justify-content: space-between;
        position: absolute;
        left: 185px;
        top: 10px;
        // border: 1px solid red;
      }
      .time {
        color: white;
        font-size: 13px;
        position: absolute;
        left: 205px;
        bottom: 55px;
      }
    }
  }
}
</style>