<template>
  <div class="singer_box">
    <ul>
      <li v-for="(item,index) in album" :key="index">
        <div class="singer_info">
          <img :src="item.picUrl" alt="">
          <span>{{item.name}}</span>
        </div>
        <div class="singer_name">
          <span class="name">{{item.artist.name}}</span>
          <span v-if="item.artist.alia.length !== 0" class="name">({{item.artist.alia[0]}})</span>
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
    ...mapState('searchMusic', ['album']),
  },
  created() {
  },
  mounted() {
    console.log(this.album);
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
      align-items: center;
      justify-content: space-between;
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
      .singer_name {
        margin-right: 25%;
        width: 20%;
        .name {
          color: rgb(122, 121, 121);
          text-align: center;
          font-size: 13px;
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