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
          <img src="../assets/animal.gif" alt="">
        </div>
        <span class="name">郝祥兴</span>
        <span class="info">数千万热爱开发的程序猿中的一枚。。。</span>
      </header>
      <footer>
        <el-button @click="dialogVisible = true">关于我</el-button>
        <el-button @click="openMusic">音乐播放器</el-button>
      </footer>
    </el-drawer>
    <el-dialog title="自我介绍" :visible.sync="dialogVisible" width="30%">
      <div class="self_introduction">
        <div style="color:orange;text-indent:2em">我叫郝祥兴，来自安徽安庆的一个普通家庭，平时喜欢打打篮球、听听歌、以及玩游戏等娱乐活动。喜欢探索宇宙每个深处的奥秘，热衷于开发，是我喜欢开发过程中的不断探索和解决bug后的成就感。我觉得生活的意义就在于你对这个世界充满着无尽的好奇！</div>
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
      dialogVisible: false
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
  background: url("../assets/sunset.jpg") center no-repeat;
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
  }
  .self_introduction {
    display: flex;
    flex-direction: column;
  }
}
</style>
