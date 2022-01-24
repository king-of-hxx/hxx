<template>
  <div class="comment">
    <span>
      <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="comment"></el-input>
    </span>
    <div class="btn_group">
      <span>
        <el-button type="text">@</el-button>
        <el-button type="text">#</el-button>
      </span>
      <el-button round>评论</el-button>
    </div>
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
    <div class="more_comment">
      <el-button round @click.native="toMoreCommentPage">更多精彩评论 ></el-button>
    </div>
    <ul>
      <span class="comment_title">最新评论</span>
      <li v-for="item in commentArrInfo" :key="item.commentId">
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
import { getCommentPlayList } from '@/apis/songComment/songComment'
import { formatTime } from '@/utils/util'
export default {
  data() {
    return {
      comment: '',
      id: Number,
      limit: 100,//评论数量
      commentArrInfo: Array,
      hotCommentArrInfo: Array
    }
  },
  filters: {
    formatTime(time) {
      return formatTime(time)
    }
  },
  mounted() {
    this.id = Number(this.$route.query.id)
    getCommentPlayList(this.id, this.limit).then(res => {
      this.commentArrInfo = res.data.comments
      this.hotCommentArrInfo = res.data.hotComments
      console.log(this.hotCommentArrInfo);
      console.log(res.data);
    })
  },
  methods: {
    toMoreCommentPage() {
      this.$router.push({ name: 'MoreComment' })
    }
  }
}
</script>
<style lang="scss" scoped>
.comment {
  .btn_group {
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;
  }
  .more_comment {
    width: 100%;
    margin: 30px;
    display: flex;
    justify-content: center;
  }
  ul {
    display: flex;
    flex-direction: column;
    .comment_title {
      font-size: 16px;
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
}
/deep/ .el-button--text {
  color: gray;
}
/deep/ .el-button:focus,
.el-button:hover {
  color: red;
}
</style>