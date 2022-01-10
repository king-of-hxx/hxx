<template>
  <div>
    <transition>
      <div v-show="!isCloseCardModel" class="mask">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>郝郝先生</span>
            <el-button style="float: right;" @click="closeCardModel" icon="el-icon-close" circle></el-button>
          </div>
          <div class="text">
            <li v-for="o in 4" :key="o">
              <span>个人标签：</span><span>html、css、js(含ES6)等前端基础扎实，熟练flex div+css布局、熟练使用Vue全家桶，理解Vue底层实现原理，熟悉linux基本命令，会使用git以及svn代码管理工具。</span>
            </li>
            <!-- <li>
          <span>搜索标签：</span><span>前端、Vue、React、Node、Git</span>
        </li> -->
          </div>
        </el-card>
      </div>
    </transition>
  </div>
</template>
<script>
import { EventBus } from "@/common/event-bus.js";
export default {
  data() {
    return {
      isCloseCardModel: true,
    }
  },
  methods: {
    closeCardModel() {
      this.isCloseCardModel = !this.isCloseCardModel
    }
  },
  mounted() {
    EventBus.$on("iscloseCardModel", (isCloseCardModel) => {
      this.isCloseCardModel = isCloseCardModel
    })
  },
  beforeDestroy() {
    EventBus.$off("iscloseCardModel")
  }

}
</script>
<style lang="scss" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.5);
  //   display: none;
  z-index: 999;
  // animation: comeCardModel 1s linear;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
  position: absolute;
  height: 400px;
  //   border: 1px solid #ccc;
  animation-name: shineBlue;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .clearfix {
    span {
      font-size: 30px;
      color: black;
      font-family: "微软雅黑";
      font-weight: bold;
    }
  }
  .text {
    li {
      display: flex;
      span:nth-of-type(1) {
        width: 50%;
        // border: 1px solid red;
        margin-right: 20px;
      }
    }
  }
}
@keyframes shineBlue {
  from {
    box-shadow: 0 0 9px #333;
  }
  50% {
    box-shadow: 0 0 38px rgb(178, 240, 9);
  }
  to {
    box-shadow: 0 0 9px #333;
  }
}
.v-enter {
  transform: translateY(-100%);
  .box-card {
    transform: rotate(180deg);
  }
}
.v-leave-to {
  transform: translateY(100%);
  .box-card {
    transform: rotate(180deg);
  }
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s linear;
  .box-card {
    transition: all 0.5s linear;
  }
}

@media screen and (max-width: 576px) {
  .box-card {
    width: 366px;
    height: 415px;
    left: 49.3%;
  }
  .clearfix {
    span {
      font-size: 25px !important;
    }
  }
}
</style>