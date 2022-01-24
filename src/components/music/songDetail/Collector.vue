<template>
  <div class="collector_box">
    <ul>
      <li v-for="item in subscribers" :key="item.userId">
        <img :src="item.avatarUrl" alt="">
        <span class="uesr_info">
          <span class="user_name">
            <span>{{item.nickname}}</span>
            <i v-if="Number(item.gender)===1" class="el-icon-male"></i>
            <i v-else class="el-icon-female"></i>
          </span>
          <span v-if="item.signature !== undefined" class="signature">{{item.signature}}</span>
        </span>
      </li>

    </ul>
    <el-row type="flex" justify="end" style="margin-bottom:50px">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="offset" :page-sizes="[10, 50, 100, 200]" :page-size="limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </el-row>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { getSongSubscribersList } from '@/apis/getSongDetail'
export default {
  data() {
    return {
      limit: 30,
      offset: 1,
      total: 0,
      subscribers: Array
    }
  },
  computed: {
    ...mapState('recommendPlaylist', ['songId'])
  },
  created() {
    this.getSongSubscribersList()
  },
  methods: {
    getSongSubscribersList() {
      getSongSubscribersList(this.songId, this.limit, this.offset).then((res) => {
        console.log(666666, res.data);
        this.subscribers = res.data.subscribers
        this.total = res.data.total
      })
    },
    handleSizeChange(val) {
      this.limit = val
      this.getSongSubscribersList()
    },
    handleCurrentChange(val) {
      this.offset = val
      this.getSongSubscribersList()
    }
  },
}
</script>
<style lang="scss" scoped>
.collector_box {
  ul {
    width: 90%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 45%;
      display: flex;
      margin-bottom: 20px;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .uesr_info {
        color: rgb(89, 90, 90);
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        .user_name {
          .el-icon-male {
            background-color: rgb(192, 243, 255);
          }
          .el-icon-female {
            background-color: rgb(255, 205, 232);
          }
        }
        .signature {
          font-size: 13px;
        }
      }
    }
  }
}

/deep/ .el-select-dropdown__list {
  display: flex;
  flex-direction: column;
}
</style>