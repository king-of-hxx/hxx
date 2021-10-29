<template>
  <div id="app">
    <div class="background">
      <we-chat-model />
      <card-model />
      <header>
        <h5>郝祥兴大大的Blog!</h5>
        <collapse />
        <div class="img">
          <img src="../assets/images/boy.jpg" alt="">
        </div>
        <span id="move_text"></span>
      </header>
      <article>
        <button>进入博客</button>
        <i class="el-icon-arrow-down"></i>
      </article>
      <footer>
        <find-me />
      </footer>
    </div>
  </div>
</template>
<script>
import Collapse from "@/components/Collapse.vue"
import FindMe from "@/components/FindMe.vue"
import WeChatModel from "@/components/WeChatModel.vue"
import CardModel from "@/components/CardModel.vue"
export default {
  components: {
    Collapse,
    FindMe,
    WeChatModel,
    CardModel
  },
  mounted() {
    let str = " 记少年、骏马走韩卢，掀东郭。"
    let i = 0;
    let move_text = document.getElementById('move_text')
    if (i <= str.length) {
      setInterval(() => {
        move_text.innerHTML = str.slice(0, i++);
      }, 500)
    } else {
      move_text.innerHTML = str;
    }
  },
  // created() {
  //   this.$axios.get('https://autumnfish.cn//captcha/sent', {
  //     params: {
  //       phone: 15555643262
  //     }
  //   }).then(res => {
  //     console.log(res);
  //   })
  // }
}
</script>
<style lang="scss" scoped>
* {
  border: 0;
}
.background {
  width: 100vw;
  height: 100vh;
  background: url("../assets/images/bgc.png") center no-repeat;
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
      animation: iconMove 2s infinite;
    }
    @keyframes iconMove {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(20px);
      }
      100% {
        transform: translateY(0px);
      }
    }
    //设置按钮发光渐变效果
    button {
      font-size: 24px;
      /* 实现渐变色，90deg表示一个角度开始 */
      background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
      background-size: 400%;
      width: 300px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #fff;
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
@media screen and (max-width: 576px) {
  #move_text {
    font-size: 25px;
  }
}
</style>
