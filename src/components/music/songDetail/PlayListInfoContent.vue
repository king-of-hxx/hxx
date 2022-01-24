<template>
  <div>
    <div class="title">
      <div class="tabs">
        <el-tabs v-model="activeName">
          <el-tab-pane label="歌曲列表" name="first">
            <ShowSongsList />
          </el-tab-pane>
          <el-tab-pane :label="gettalk" name="second">
            <ShowSongComment />
          </el-tab-pane>
          <el-tab-pane label="收藏者" name="third">
            <Collector />
          </el-tab-pane>
        </el-tabs>
      </div>
      <div>
        <el-input class="search" v-model="input" placeholder="回车搜索歌单音乐" suffix-icon="el-icon-search"></el-input>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import ShowSongsList from "@/components/music/songDetail/ShowSongList.vue"
import ShowSongComment from "@/components/music/songDetail/ShowSongComment.vue"
import Collector from "@/components/music/songDetail/Collector.vue"
export default {
  components: {
    ShowSongsList,
    ShowSongComment,
    Collector
  },
  data() {
    return {
      activeName: 'first',
      input: ''
    }
  },
  computed: {
    ...mapState('recommendPlaylist', ['commentCount']),
    gettalk() {
      return `评论(${this.commentCount})`;
    },
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.title {
  margin-top: 20px;
  position: relative;
  .tabs {
    width: 100%;
  }
  .search {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 20%;
  }
  /deep/ .el-input__inner {
    border-radius: 35px;
  }
  /deep/ .el-tabs__item:hover {
    color: red;
  }
  /deep/ .el-tabs__active-bar {
    height: 3px;
    background-color: red;
  }
  /deep/ .el-tabs__item {
    font-size: 16px;
  }
  /deep/ .el-tabs__item.is-active {
    color: black;
  }
  // .el-menu--horizontal > .el-menu-item.is-active {
  //   border-bottom: 2px solid red;
  // }
  // .el-menu--horizontal > .el-menu-item.is-active {
  //   font-size: 1.2rem;
  //   font-weight: bold;
  // }
  // .el-menu-item {
  //   font-size: 1rem;
  //   color: black;
  // }
}
</style>