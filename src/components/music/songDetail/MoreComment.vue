<template>
  <div class="comment_box">
    <ul class="great_comment">
      <span class="comment_title">精彩评论</span>
      <li v-for="item in hotCommentArrInfo" :key="item.commentId">
        <img :src="item.user.avatarUrl" alt="">
        <span class="comment_info">
          <span>
            <span class="user_name">{{item.user.nickname}}:</span>
            <span class="user_comment">{{item.content}}</span>
          </span>
          <span v-if="item.beReplied[0]!==undefined" class="reply_comment">
            <span class="user_name">@{{item.beReplied[0]===undefined ? '':item.beReplied[0].user.nickname}}</span>:
            <span>{{item.beReplied[0]===undefined? '':item.beReplied[0].content}}</span>
          </span>
          <span class="comment_time">
            <span>{{item.time | formatTime}}</span>
            <span class="icon">
              <i class="fa fa-thumbs-o-up" aria-hidden="true">{{item.likedCount}}</i>
              <!-- <i class="fa fa-thumbs-up" aria-hidden="true"></i> -->
              <span>|</span>
              <i class="fa fa-share-square-o" aria-hidden="true"></i>
              <span>|</span>
              <i class="el-icon-chat-dot-round"></i>
            </span>
          </span>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { getMoreGreatComment } from '@/apis/songComment/songComment'
export default {
  data() {
    return {
      type: 2,//热门评论类型
      limit: 500,
      hotCommentArrInfo: Array
    }
  },
  computed: {
    ...mapState('recommendPlaylist', ['songId'])
  },
  created() {
    getMoreGreatComment(this.songId, this.type, this.limit).then((res) => {
      this.hotCommentArrInfo = res.data.hotComments
      console.log(res.data);
    })
  }
}
</script>
<style lang="scss" scoped>
.comment_box {
  padding: 20px 20px;
  height: 586px;
  overflow: auto;
}
ul {
  display: flex;
  flex-direction: column;
  .comment_title {
    font-size: 20px;
    font-weight: 600;
  }
  li {
    padding: 15px 0px;
    display: flex;
    font-size: 12px;
    border-bottom: 0.5px solid rgb(209, 207, 207);
    img {
      height: 35px;
      width: 35px;
      border-radius: 50%;
      margin-right: 10px;
    }
    .user_name {
      color: rgb(0, 132, 255);
    }
    .user_comment {
      margin-left: 5px;
    }
    .comment_info {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .reply_comment {
        margin: 10px 0px;
        background-color: rgb(234, 236, 236);
      }
      .comment_time {
        display: flex;
        justify-content: space-between;
        .icon {
          width: 120px;
          display: flex;
          justify-content: space-between;
          span {
            color: rgb(205, 209, 208);
          }
        }
      }
    }
  }
}
</style>