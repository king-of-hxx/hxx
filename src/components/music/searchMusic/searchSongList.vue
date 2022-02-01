<template>
  <div class="singer_box">
    <ul>
      <li v-for="item in playlists" :key="item.id">
        <img :src="item.coverImgUrl" alt="">
        <span class="name">{{item.name}}</span>
        <span class="songCount">{{item.trackCount}}首</span>
        <span class="by_username">
          <span class="by">by</span>
          <span class="user_name">{{item.creator.nickname}}</span>
        </span>
        <span class="play_count">
          <i class="fa fa-play-circle-o"></i>
          <span>{{item.playCount}}</span>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState('searchMusic', ['playlists']),
  },
  created() {
  },
  mounted() {
    console.log(this.playlists);
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.singer_box {
  ul {
    li {
      height: 90px;
      padding-left: 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      // justify-content: space-between;
      img {
        height: 70px;
        width: 70px;
        border-radius: 8px;
        margin-right: 10px;
      }
      .songCount {
        width: 6%;
        font-size: 13px;
        margin-right: 2%;
        color: rgb(175, 173, 173);
        // border: 1px solid red;
      }
      .name {
        width: 40%;
        color: rgb(61, 61, 61);
        margin-right: 3%;
        // border: 1px solid red;
      }
      .by_username {
        width: 25%;
        // border: 1px solid red;
        .by {
          font-size: 13px;
          margin-right: 5px;
          color: rgb(175, 173, 173);
        }
        .user_name {
          font-size: 13px;
          color: rgb(89, 89, 90);
        }
      }
      .play_count {
        font-size: 13px;
        display: flex;
        align-items: center;
        color: rgb(187, 187, 187);
        .fa-play-circle-o {
          font-size: 18px;
        }
      }
    }
    li:nth-child(odd) {
      background-color: rgb(247, 245, 242);
    }
    li:hover {
      background-color: rgb(233, 232, 230);
    }
  }
}
</style>