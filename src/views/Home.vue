<template>
  <div id="app">
    <div class="background">
      <Model />
      <header>
        <h5>郝祥兴大大的Blog!</h5>
        <Collapse />
        <div class="img">
          <img src="../assets/boy.jpg" alt="">
        </div>
        <span id="move_text"></span>
      </header>
      <article>
        <button>进入博客</button>
        <i class="el-icon-arrow-down"></i>
      </article>
      <footer>
        <FindMe />
      </footer>
    </div>
  </div>
</template>
<script>
import Collapse from "@/components/Collapse.vue"
import FindMe from "@/components/FindMe.vue"
import Model from "@/components/Model.vue"
export default {
  components: {
    Collapse,
    FindMe,
    Model
  },
  mounted() {
    let str = " 记少年、骏马走韩卢，掀东郭。"
    let i = 0;
    var move_text = document.getElementById('move_text')
    if (i <= str.length) {
      setInterval(() => {
        move_text.innerHTML = str.slice(0, i++);
      }, 500)
    } else {
      move_text.innerHTML = str;
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  border: 0;
}
.background {
  width: 100vw;
  height: 100vh;
  background: url("../assets/bgc.png") center no-repeat;
  background-size: 100% 100%;
  header {
    margin: 0 auto;
    padding: 25px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 400px;
    // border: 1px solid red;
    color: rgb(245, 148, 3);
    font-size: 30px;
    font-weight: bold;
    h5 {
      animation: leftAnimate 2s ease 1; /*调用已定义好的动画lefteaseinAnimate，全程运行时间1S，进入的速度曲线为ease，只播放一次*/
    }
    .el-button-group {
      position: fixed;
      left: 20px;
      top: 20px;
    }
    .img {
      width: 200px;
      height: 200px;
      // border: 1px solid red;
      img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
      }
    }
    .img:hover {
      animation: round_animate 2s linear infinite;
    }
    @keyframes round_animate {
      to {
        transform: rotate(1turn);
      }
    }
    #move_text {
      height: 40px;
      margin: 10px;
      color: #4cc134;
      animation: changeshadow 1s ease-in infinite;
      // border: 1px solid rgb(0, 255, 76);
    }
    #move_text:hover {
      font-size: 40px;
    }
    @keyframes changeshadow {
      0% {
        text-shadow: 0 0 10px #4cc134;
      }
      50% {
        text-shadow: 0 0 100px #4cc134;
      }
      100% {
        text-shadow: 0 0 1px #4cc134;
      }
    }
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
    @keyframes rightAnimate {
      0% {
        transform: translateX(2000px);
        opacity: 0;
      }
      100% {
        transform: translateX(0px);
        opacity: 1;
      }
    }
  }
  article {
    width: 100%;
    height: 150px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    animation: rightAnimate 2s ease 1;
    // border: 1px solid red;
    .el-icon-arrow-down {
      font-size: 50px;
      color: white;
      cursor: pointer;
    }
    //设置按钮发光渐变效果
    button {
      /* 设置字体大小 */
      font-size: 24px;
      /* 实现渐变色，90deg表示一个角度开始 */
      background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
      /* 背景色放大 */
      background-size: 400%;
      /* 图形大小 */
      width: 300px;
      height: 40px;
      /* 行高 */
      line-height: 40px;
      /* 文本居中 */
      text-align: center;
      /* 字体颜色 */
      color: #fff;
      /* 设置成胶囊状 */
      border-radius: 50px;
    }
    /* 设置发光 */

    button::before {
      content: "";
      position: absolute;
      /* 设置发光范围 */
      left: -5px;
      right: -5px;
      top: -5px;
      bottom: -5px;
      background-size: 400%;
      border-radius: 50px;
      /* filter实现高斯模糊 */
      filter: blur(20px);
      z-index: -1;
    }

    button:hover::before {
      animation: sun 8s infinite;
    }
    /* 鼠标经过产生的效果 */
    button:hover {
      /* 产生8秒的效果，sun是名称*/
      animation: sun 8s infinite;
    }
    /* 设置流光 */
    @keyframes sun {
      100% {
        /* 以x轴为基准向左移动4个自身大小 */
        background-position: -400% 0;
      }
    }
  }
}
</style>
