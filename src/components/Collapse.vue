<template>
  <div class="Collapse">
    <el-button-group>
      <el-button @click="drawer = true" type="primary" style="background:rgb(48, 129, 220)">
        <i class="fa fa-bars fa-lg" aria-hidden="true"></i>
      </el-button>
    </el-button-group>
    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
      <header>
        <div class="nav_img">
          <img src="../assets/images/animal.gif" alt="">
        </div>
        <span class="name">郝祥兴</span>
        <span class="info">数千万热爱开发的程序猿中的一枚。。。</span>
      </header>
      <footer>
        <button @click="dialogVisible = true">关于我</button>
        <button @click="openMusic">音乐播放器</button>
      </footer>
    </el-drawer>
    <el-dialog title="自我介绍" :visible.sync="dialogVisible" width="80%">
      <div class="self_introduction">
        <div style="color:orange;text-indent:2em">{{mySelfInfo}}</div>
        <div style="color:red;text-shadow: 5px 5px 5px #8c8f8c;font-size:16px;">下面有一段高频面试题看看你都会了吗?</div>
        <pre style="text-indent:2em;margin-top:10px">
          前端面试高频题
          一．Vue题
          1.vue封装指令，常用的指令
          2.Vue中的key的作用，用到哪些地方
          3.Diff算法
          4.Vuex的原理
          5.Vue双向绑定原理，怎么实现
          6.路由的几种模式，history的原理
          7.Vue生命周期
          8.Vue的计算属性和侦听属性

          二．JS
          1.常用的es6数组的方法（一些算法题）
          2.Href和src区别
          3.图片怎么判断是否显示成功
          4.浏览器渲染页面过程
          5.浏览器输入网址后发生了什么
          6.回流和重绘(BFC)
          7.手写递归函数用作深拷贝,stringfy有什么缺点
          8.手写一个闭包函数,它有一些什么缺点和优点
          9.手写几个数组去重(一些算法题)
          10.Promise函数的作用, async awite函数手写
          11.防抖和节流函数,手写一个防抖和节流函数
          12.说一说面向对象
          13.说一说js的原型和原型链
          14.Flex布局实现瀑布流,实现骰子布局

          三．算法题
          1.js一段字符串判断出现次数最多的
          2.判断一个数据是否是数组,对象
        </pre>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Collapse',
  data() {
    return {
      drawer: false,
      aboutMe: false,
      dialogVisible: false,
      mySelfInfo: '鄙人郝祥兴,平时喜欢打打篮球、听听歌、以及玩游戏等娱乐活动。喜欢探索宇宙每个深处的奥秘,热衷于开发,平时喜欢折腾,我喜欢开发过程中的不断探索和解决bug后的成就感。我觉得生活的意义就在于你对这个世界充满着无尽的好奇！'
    };
  },
  methods: {
    openMusic() {
      this.$router.push({
        name: "Music"
      })
    }
  }
}
</script>

<style scoped lang="scss">
.el-button-group {
  position: fixed;
  left: 20px;
  top: 20px;
}
.el-drawer {
  background: url("../assets/images/sunset.jpg") center no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  header {
    width: 100%;
    height: 40%;
    border-bottom: 1px solid rgb(158, 155, 155);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .nav_img {
      width: 150px;
      height: 150px;
      // border: 1px solid red;
      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
    }
    .name {
      font-size: 17px;
      color: rgb(35, 213, 236);
    }
    .info {
      font-size: 21px;
      color: rgb(11, 173, 46);
    }
  }
  footer {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    button {
      width: 30%;
      height: 10%;
      cursor: pointer;
    }
  }
  .self_introduction {
    display: flex;
    flex-direction: column;
    .ask {
      color: rgb(255, 0, 200);
      text-shadow: 5px 5px 5px rgb(0, 255, 42);
    }
  }
}
@media screen and (max-width: 576px) {
  .el-drawer {
    width: 100%;
  }
  .nav_img {
    width: 100px !important;
    height: 100px !important;
    // border: 1px solid red;
  }
  img {
    width: 100px !important;
    height: 100px !important;
    border-radius: 50%;
  }
  .info {
    font-size: 1px !important;
  }
  footer {
    button {
      width: 70% !important;
      height: 10% !important;
    }
  }
}
</style>
