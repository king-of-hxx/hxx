<template>
  <div class="singer_box">
    <ul>
      <li v-for="(item,index) in artists" :key="index">
        <div class="singer_info">
          <img :src="item.picUrl" alt="">
          <span>{{item.name}}</span>
        </div>
        <div class="icon">
          <i class="fa fa-user-o"></i>
        </div>
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
    ...mapState('searchMusic', ['artists']),
  },
  created() {
  },
  mounted() {
    console.log(this.artists);
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
          border-radius: 8px;
          margin-right: 10px;
        }
      }
      .icon {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: rgb(248, 78, 67);
        color: white;
        text-align: center;
        margin-right: 20px;
        .fa-user-o {
          font-size: 16px;
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