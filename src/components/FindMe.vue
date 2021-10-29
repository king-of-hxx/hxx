<template>
  <div class="find_me">
    <div class="group_list">
      <a href="javascript:void(0)" @click="openWechatModel">
        <i class="fa fa-weixin fa-3x"></i>
      </a>
      <a href="https://github.com/king-of-hxx">
        <i class="fa fa-github fa-3x"></i>
      </a>
      <a href="https://space.bilibili.com/482180888">
        <i class="fa fa-qq fa-3x"></i>
      </a>
      <a href="javascript:void(0)" @click="openCardModel">
        <i class="fa fa-id-card-o fa-3x"></i>
      </a>
    </div>
  </div>
</template>
<script>
import { EventBus } from "@/common/event-bus.js";
export default {
  components: {
  },
  data() {
    return {
      iscloseWechatModel: false,
      isclosCardModel: false,
    }
  },
  methods: {
    openWechatModel() {
      EventBus.$emit("iscloseWechatModel", this.iscloseWechatModel)
    },
    openCardModel() {
      EventBus.$emit("iscloseCardModel", this.iscloseCardModel)
    }
  }
}
</script>
<style lang="scss" scoped>
.find_me {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 1px solid red;
  animation: leftAnimate 2s ease 1;
  @keyframes leftAnimate {
    0% {
      transform: translateX(-2000px);
      opacity: 0;
    } /*在0%时设置文字在想X轴-2000px位移处（左边），透明度为0，也就是看不见文字*/
    100% {
      transform: translateX(0px);
      opacity: 1;
    } /*在100%时设置文字在想X轴0px位移处，也就是原始布局的位置，透明度为1，也就是文字可以看见了*/
  }
  .group_list {
    width: 60%;
    height: 50%;
    display: flex;
    justify-content: space-evenly;
    // border: 1px solid red;
    a {
      width: 8%;
      text-decoration: none;
      // border: 1px solid red;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .fa {
      color: white;
    }
    a:hover {
      font-size: 25px;
    }
  }
}
@media screen and (max-width: 576px) {
  .find_me {
    height: 110px;
  }
  .group_list {
    width: 100% !important;
  }
  a:hover {
    font-size: none;
  }
}
</style>
