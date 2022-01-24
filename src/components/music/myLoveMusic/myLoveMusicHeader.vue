<template>
  <div class="playListInfo_header" v-if="currentUserInfo !== null">
    <div class="left_img">
      <img :src="myLoveDetail.coverImgUrl" alt="">
    </div>
    <div class="right_info">
      <span class="first_info">
        <span>歌单</span>
        <span>{{myLoveDetail.name}}</span>
      </span>
      <span class="second_info">
        <img :src="currentUserInfo.avatarUrl" alt="">
        <span>{{currentUserInfo.nickname}}</span>
        <span>{{myLoveDetail.createTime | formatDate}}创建</span>
      </span>
      <div class="button_group">
        <el-button type="danger" @click="dialogVisible = true" icon="el-icon-video-play" round>播放全部</el-button>
        <el-button icon="el-icon-folder-add" round>收藏({{myLoveDetail.subscribedCount}})</el-button>
        <el-button round><i class="fa fa-share-square-o" aria-hidden="true"></i>分享</el-button>
        <el-button round><i class="fa fa-download" aria-hidden="true"></i>下载全部</el-button>
      </div>
      <div class="fourth_info">
        <span style="margin-right:20px;">歌曲:{{myLoveDetail.trackCount}}</span>
        <span>播放:{{myLoveDetail.playCount}}</span>
      </div>
      <el-dialog title="替换播放列表" :visible.sync="dialogVisible" :modal=false width="40%" center :close-on-click-modal=false>
        <span>"播放全部"将会替换当前的播放列表,是否继续?</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="danger" @click="surePlayAllMusic">继 续</el-button>
          <el-button @click="dialogVisible = false">取 消</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { formatDate } from '@/utils/util'
import { getUserSong } from '@/apis/myLoveMusic'
export default {
  data() {
    return {
      dialogVisible: false,
      myLoveDetail: {},
      myLoveMusicArr: '',
    }
  },
  computed: {
    ...mapState('recommendPlaylist', ['picUrl']),
    ...mapState('playListDetail', ['musicIds']),
    ...mapState('login', ['currentUserInfo'])
  },
  filters: {
    formatDate,
  },
  created() {
    if (this.currentUserInfo == null) {
      return
    } else {
      getUserSong(this.currentUserInfo.userId).then(myLoveDetail => {
        this.myLoveDetail = myLoveDetail.data.playlist[0]
      })
    }

  },
  mounted() {
    // console.log(this.$store.state);
  },
  methods: {
    surePlayAllMusic() {
      this.dialogVisible = false
      this.$store.dispatch('playListDetail/getMusicUrl', this.musicIds[0]);
      this.$store.dispatch('playListDetail/getMusicInfo', this.musicIds[0]);
    }
  }
}
</script>
<style lang="scss" scoped>
.playListInfo_header {
  width: 100%;
  height: 250px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  // border: 1px solid red;
  .left_img {
    width: 25%;
    // border: 1px solid red;
    img {
      max-width: 100%;
      height: 250px;
    }
  }
  .right_info {
    width: 73%;
    display: flex;
    height: 200px;
    flex-direction: column;
    justify-content: space-between;
    // border: 1px solid yellow;
    .first_info {
      display: flex;
      align-items: center;
      span:first-child {
        border: 1px solid red;
        color: red;
        height: 20px;
        line-height: 20px;
        text-align: center;
        margin-right: 10px;
      }
      span:nth-child(2) {
        font-size: 1.4rem;
        font-weight: 500;
      }
    }
    .second_info {
      display: flex;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      span:nth-child(2) {
        color: rgb(118, 194, 235);
        font-size: 1rem;
        margin: 0px 10px;
      }
      span:nth-child(3) {
        color: rgb(103, 103, 103);
        font-size: 1rem;
      }
    }
    .button_group {
      width: 100%;
      font-size: 1.5rem;
      margin: 10px 0px;
      .el-button {
        padding: 5px 25px !important;
        font-size: 16px !important;
      }
      i {
        font-size: 16px;
      }
    }
    .third_info {
      font-size: 1rem;
      span:nth-child(2) {
        color: rgb(118, 194, 235);
      }
    }
    .fourth_info {
      font-size: 1rem;
    }
    .fifth_info {
      width: 300px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      // border: 1px solid red;
    }
    .dialog-footer {
      .el-button {
        width: 100px;
        border-radius: 16px;
      }
    }
  }
}
</style>