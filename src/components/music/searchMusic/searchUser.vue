<template>
  <div class="singer_box">
    <ul>
      <li v-for="(item,index) in userprofiles" :key="index">
        <div class="singer_info">
          <img :src="item.avatarUrl" alt="">
          <span>{{item.nickname}}</span>
          <i v-if="item.gender ===1 " class="el-icon-male"></i>
          <i v-else class="el-icon-female"></i>
        </div>
        <span class="logo">网易音乐人</span>
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
    ...mapState('searchMusic', ['userprofiles']),
  },
  created() {
  },
  mounted() {
    console.log(this.userprofiles);
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
      justify-content: space-between;
      align-items: center;
      // border: 1px solid red;
      .singer_info {
        height: 90px;
        display: flex;
        align-items: center;
        img {
          height: 70px;
          width: 70px;
          border-radius: 50%;
          margin-right: 10px;
        }
        span {
          margin: 10px;
        }
        .el-icon-male {
          background-color: rgb(188, 239, 251);
          color: rgb(84, 175, 217);
          border-radius: 50%;
        }
        .el-icon-female {
          background-color: rgb(244, 195, 223);
          color: rgb(239, 119, 170);
          border-radius: 50%;
        }
      }
      .logo {
        color: rgb(143, 141, 141);
        text-align: center;
        margin-right: 30px;
        font-size: 13px;
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