<template>
  <div>
    <div class="header">
      <span>操作</span>
      <span>标题</span>
      <span>歌手</span>
      <span>专辑</span>
      <span>时间</span>
    </div>
    <ul>
      <li v-for="(item,index) in musicInfoArr" :key="index" @dblclick="playMusic(item.id,item.num)">
        <span class="operate">
          <p>{{index+1>9? (index+1) : '0'+(index+1)}}</p>
          <i class="fa fa-heart" aria-hidden="true"></i>
          <i class="el-icon-download"></i>
        </span>
        <span class="title">
          <p>{{item.name}}</p>
          <span>SQ</span>
        </span>
        <p class="songer">{{item.ar[0].name}}</p>
        <p class="album">{{item.al.name}}</p>
        <p class="time">{{item.dt | totaltime}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
// import { getMusicInfo } from "@/apis/getSongDetail";
import { timeFormat } from '@/utils/util'
export default {
  data() {
    return {
      id: Number,
      num: 0
    }
  },
  computed: {
    ...mapState('playListDetail', ['musicIds', 'musicInfoArr'])
  },
  filters: {
    totaltime(time) {
      return timeFormat(time)
    }
  },
  // watch: {
  //   id() {
  //     this.$forceUpdate()
  //   }
  // },
  activated() {
    this.id = Number(this.$route.query.id)
  },
  created() {
  },
  mounted() {
    this.id = Number(this.$route.query.id)
    console.log(this.id);
    this.$store.dispatch('recommendPlaylist/getRecommendPlaylistInfo', this.id)
    this.$store.commit('recommendPlaylist/getSongId', this.id)
    let id = this.id
    let num = this.num
    this.$store.dispatch('playListDetail/getPlaylistInfo', { id, num })
    // console.log(11111111, this.musicIds);
    // console.log(22222222, JSON.parse(localStorage.getItem('musicIds')));
  },
  methods: {
    playMusic(id, num) {
      this.$store.dispatch('playListDetail/getMusicUrl', id);
      this.$store.dispatch('playListDetail/getMusicInfo', id);
      this.$store.commit('playListDetail/getMusicIdNum', num)
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  margin: 10px;
  display: flex;
  justify-content: space-between;
  span:first-child {
    width: 10%;
    text-align: center;
  }
  span:nth-child(2) {
    width: 32%;
  }
  span:nth-child(3) {
    width: 20%;
  }
  span:nth-child(4) {
    width: 25%;
  }
  span:nth-child(5) {
    width: 7%;
    text-align: center;
  }
}
ul {
  li {
    height: 40px;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    box-shadow: 0px 0px 5px rgb(201, 200, 200);
    margin-bottom: 10px;
    color: rgb(54, 54, 54);
    .operate {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 10%;
      .fa-heart {
        color: red;
      }
    }
    .title {
      display: flex;
      align-items: center;
      width: 32%;
      span {
        margin-left: 5px;
        height: 18px;
        width: 26px;
        color: red;
        border: 1px solid red;
        line-height: 18px;
      }
    }
    .songer {
      line-height: 40px;
      width: 20%;
      margin-left: 20px;
    }
    .album {
      line-height: 40px;
      width: 25%;
    }
    .time {
      line-height: 40px;
      width: 7%;
      text-align: center;
      margin-right: 10px;
    }
  }
  li:hover {
    background-color: rgb(190, 187, 187);
  }
  li:nth-child(odd) {
    background-color: rgb(240, 236, 236);
  }
  li:nth-child(even) {
    background-color: rgb(211, 208, 208);
  }
}
</style>