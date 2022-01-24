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
            <li v-for="item in skill" :key="item.id">
              <span style="width:120px">{{item.title}}</span><span style="width:310px">{{item.content}}</span>
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
      skill: [
        { id: '1', title: '个人喜欢名言1：', content: '无论多么牛逼的梦想,都挡不住你傻逼似的坚持!' },
        { id: '2', title: '个人喜欢名言2：', content: '别把生活想得太好，你会跌得很重，也别把生活想得太糟，你会失去活的勇气，生活中真正的英雄含义，就是认清生活真相后依然热爱生活。' },
        { id: '3', title: '个人特点：', content: '平时比较腼腆,但是我这个人还是很好打交道的,平时喜欢打打篮球,追追剧什么的。' },
        { id: '4', title: '个人技能：', content: '熟练使用Vue全家桶和react前端技术以及一点java后端基础,理解Vue底层实现原理,熟悉linux基本命令,会使用git以及svn代码管理工具。' }
      ]
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
  li {
    display: flex;
    height: 75px;
    span:first-child {
      color: red;
      text-shadow: 5px 5px 5px #8c8f8c;
    }
  }
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
      font-size: 20px;
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