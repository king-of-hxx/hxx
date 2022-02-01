<template>
  <div v-if="!isWechatClose" class="model_box">
    <div class="bg">
      <div class="content">
        <el-button @click="closeWechatModel" icon="el-icon-close" circle></el-button>
        <img src="../assets/images/wechat.png" alt="">
        <p>微信扫一扫，添加我~</p>
      </div>
    </div>
  </div>
</template>
<script>
import { EventBus } from "@/common/event-bus.js";
export default {
  data() {
    return {
      isWechatClose: true
    }
  },
  methods: {
    closeWechatModel() {
      this.isWechatClose = !this.isWechatClose
    }
  },
  mounted() {
    EventBus.$on("iscloseWechatModel", (iscloseWechatModel) => {
      this.isWechatClose = iscloseWechatModel
    })
  },
  beforeDestroy() {
    EventBus.$off("iscloseWechatModel")
  }
}
</script>
<style lang="scss" scoped>
.model_box {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10000;
  .bg {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    z-index: 1;
    .content {
      width: 450px;
      height: 400px;
      background-color: rgb(241, 241, 240);
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      justify-content: space-evenly;
      position: relative;
      .el-button {
        position: absolute;
        right: 10px;
        top: 10px;
      }

      img {
        width: 300px;
        height: 300px;
        animation: wechatMove 4s ease 1;
      }
    }
  }
}
img:hover {
  transform: skew(6deg, 3deg);
}
.bg::before {
  content: "";
  position: absolute;
  width: 200%;
  height: 200%;
  left: -80%;
  top: -20%;
  background: url("../assets/images/girl.png") center no-repeat;
  background-size: contain;

  filter: blur(5px);
  /* 值越大越模糊 */
  z-index: 16;
}
@keyframes wechatMove {
  0% {
    transform: translateX(-2000px);
    opacity: 0;
  }
  20% {
    transform: skew(30deg, 10deg);
    opacity: 0.3;
  }
  50% {
    transform: rotate(180deg);
    opacity: 0.5;
  }
  80% {
    transform: scale(1.2, 1.6);
    opacity: 0.7;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
@media screen and (max-width: 576px) {
  .bg::before {
    height: 180%;
    top: -40%;
  }
  .content {
    width: 353px !important;
  }
}
</style>