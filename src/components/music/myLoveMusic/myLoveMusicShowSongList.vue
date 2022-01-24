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
// import { getMyLoveMusic } from '@/apis/myLoveMusic'
export default {
  data() {
    return {
      id: Number,
      num: 0,
    }
  },
  computed: {
    ...mapState('login', ['currentUserInfo']),
    ...mapState('playListDetail', ['musicInfoArr'])
  },
  filters: {
    totaltime(time) {
      return timeFormat(time)
    }
  },
  created() {

  },
  mounted() {
    if (this.currentUserInfo == null) {
      this.$router.push({ name: 'NotFound' })
      this.$message.warning('请先登录才能获取您喜欢的歌曲!')
    } else {
      let userId = this.currentUserInfo.userId
      let num = this.num
      this.$store.dispatch('playListDetail/getMyLoveMusicInfo', { userId, num })
    }
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
    display: flex;
    justify-content: space-between;
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
      width: 20%;
    }
    .album {
      width: 25%;
    }
    .time {
      width: 7%;
      text-align: center;
      margin-right: 10px;
    }
  }
  li:hover {
    background-color: rgb(190, 187, 187);
  }
}
</style>