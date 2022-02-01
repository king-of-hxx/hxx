<template>
  <div class="search_box">
    <h3>搜索 Wave</h3>
    <div class="may_be_interested">
      <h5>你可能感兴趣</h5>
      <div>
        <span class="interestingInfo">
          <img :src="artists[1].picUrl" alt="">
          <div>
            <span>歌手:{{artists[1].name}}</span>
            <span>mv:{{artists[1].mvSize}}</span>
          </div>
        </span>
        <span class="interestingInfo">
          <img :src="artists[1].picUrl" alt="">
          <div>
            <span>专辑:{{artists[1].albumSize}}</span>
            <span>{{artists[1].name}}</span>
          </div>
        </span>
      </div>
    </div>
    <el-menu :default-active="this.$route.path" class="el-menu-demo" :router="true" mode="horizontal">
      <el-menu-item v-for="(item,index) in titleList" :key="index" :index="item.path">{{item.title}}</el-menu-item>
    </el-menu>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      titleList: [
        { path: '/music/search/searchSongs', title: '单曲' },
        { path: '/music/search/searchSinger', title: '歌手' },
        { path: '/music/search/searchAlbum', title: '专辑' },
        { path: '/music/search/searchVideo', title: '视频' },
        { path: '/music/search/searchSongList', title: '歌单' },
        { path: '/music/search/searchUser', title: '用户' }
      ]
    }
  },
  computed: {
    ...mapState('searchMusic', ['artists'])
  },
  created() {
    // console.log(this.artists);
  },
  mounted() {

  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.search_box {
  height: 586px;
  overflow: auto;
  // border: 1px solid red;
  h3 {
    margin: 20px 20px;
  }
  .may_be_interested {
    margin: 20px 20px;
    h5 {
      font-size: 12px;
      font-weight: 300;
      color: rgb(55, 56, 56);
      margin-bottom: 20px;
    }
    div {
      display: flex;
      span:first-child {
        margin-right: 10px;
      }
      .interestingInfo {
        display: flex;
        align-items: center;
        height: 70px;
        width: 250px;
        background-color: rgb(244, 244, 244);
        img {
          height: 40px;
          width: 40px;
          margin: 0px 15px;
          border-radius: 50%;
        }
        div {
          display: flex;
          flex-direction: column;
          span:first-child {
            font-size: 14px;
            font-weight: 200;
            color: rgb(55, 56, 56);
          }
          span:nth-child(2) {
            font-size: 12px;
            font-weight: 100;
            color: rgb(106, 107, 107);
          }
        }
      }
    }
  }
}
/deep/ .el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu--horizontal > .el-menu-item {
  height: 50px;
  line-height: 50px;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid red;
}
.el-menu--horizontal > .el-menu-item.is-active {
  font-size: 1.1rem;
  font-weight: bold;
}
.el-menu-item {
  font-size: 1rem;
  color: black;
}
::-webkit-scrollbar {
  //滚动条的宽度
  width: 6px;
  height: 9px;
}
::-webkit-scrollbar-thumb {
  //滚动条的设置
  background-color: #dfe6ea;
  background-clip: padding-box;
  min-height: 28px;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #24ce57;
}
</style>