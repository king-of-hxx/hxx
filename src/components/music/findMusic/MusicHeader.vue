<template>
  <div class="music_header">
    <div class="left">
      <img src="@/assets/images/wangyiyun.png" alt="">
      <span>网抑云音乐</span>
    </div>
    <div class="center">
      <div class="button_group">
        <el-button icon="el-icon-arrow-left" circle size="mini"></el-button>
        <el-button icon="el-icon-arrow-right" circle size="mini"></el-button>
      </div>
      <el-input class="search_music" v-model="input" placeholder="搜索" prefix-icon="el-icon-search"></el-input>
    </div>
    <div class="right">
      <div class="user">
        <img :src="currentUserInfo==null ? userImg : currentUserInfo.avatarUrl" alt="" />
        <span v-if="currentUserInfo !== null" class="user_name" style="fontSize:13px;">{{currentUserInfo.nickname}}</span>
      </div>
      <el-button v-if="currentUserInfo==null" type="text" @click="openLogin" style="color:#fff">登录</el-button>
      <el-button v-else type="text" @click="loginOut" style="color:#fff">退出</el-button>
      <el-badge :value="200" :max="99" class="item">
        <i class="el-icon-message"></i>
      </el-badge>
      <i class="el-icon-close" @click="back_index"></i>
      <transition>
        <div v-show="!isCloseCardModel" class="login_mask">
          <div class="login">
            <el-button class="close_login" @click="closeLoginModel" icon="el-icon-close" circle></el-button>
            <div style="display:flex;justify-content:center">
              <i class="fa fa-mobile fa-5x" aria-hidden="true"></i>
            </div>
            <el-form :model="form" :rules="loginInfoRules">
              <el-form-item label="手机号" :label-width="formLabelWidth">
                <el-input prefix-icon="el-icon-user" suffix-icon="el-icon-warning-outline" v-model="form.phone" placeholder="Enter your username"></el-input>
              </el-form-item>
              <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input prefix-icon="el-icon-unlock" placeholder="input password" v-model="form.password" @keyup.enter.native="confirmLogin" show-password></el-input>
              </el-form-item>
            </el-form>
            <div class="button_group">
              <el-button @click="cancelLogin">取消</el-button>
              <el-button type="primary" @click="confirmLogin(form.phone,form.password)">登录</el-button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import { getPhoneLogin, getPhoneLoginOut, } from "@/apis/login"
export default {
  data() {
    return {
      input: '',
      userImg: require("@/assets/images/login_person.png"),
      isCloseCardModel: true, //显示登陆框
      currentUserInfo:
        window.localStorage.getItem("currentUserInfo") === "null"
          ? null
          : JSON.parse(window.localStorage.getItem("currentUserInfo")), //查看浏览器是否已存有数据
      loginInfoRules: {
        phone: [{ required: true, message: " ", trigger: "blur" }],
        password: [{ required: true, message: " ", trigger: "blur" }]
      }, // 登录格式的校验
      form: {
        phone: "15555643262",
        password: "hxx123456789"
      },
      formLabelWidth: "80px" //登录内输入框的宽度
    }
  },
  methods: {
    openLogin() {
      this.isCloseCardModel = false;
    },
    cancelLogin() {
      this.isCloseCardModel = true;
    },
    confirmLogin(phone, password) {
      getPhoneLogin(phone, password).then(res => {
        this.currentUserInfo = res.data.profile;
        this.userImg = this.currentUserInfo.avatarUrl
        window.localStorage.setItem("currentUserInfo", JSON.stringify(this.currentUserInfo))
      })
      this.isCloseCardModel = true;
    },
    loginOut() {
      getPhoneLoginOut().then(res => {
        if (res.data.code == 200) {
          //当前用户信息设置为null
          this.currentUserInfo = null;
          //存储用户信息的localstorage设置为null
          window.localStorage.setItem("currentUserInfo", null);
          this.userImg = require("@/assets/images/login_person.png");
        }
      })
    },
    closeLoginModel() {
      this.isCloseCardModel = true;
    },
    back_index() {
      this.$router.push({
        name: "Home"
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.music_header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: red;
  color: white;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    padding-left: 20px;
    img {
      border-radius: 50%;
    }
    span {
      letter-spacing: 2px;
      font-size: 20px;
      margin-left: 10px;
    }
  }
  .center {
    width: 30%;
    // border: 1px solid black;
    display: flex;
    .button_group {
      display: flex;
      align-items: center;
      .el-button {
        background-color: rgb(233, 77, 71);
        height: 40px;
        width: 40px;
        padding: 0 !important;
        border: 0;
        color: rgb(245, 167, 165);
      }
      .el-button:first-child {
        margin-right: 10px;
      }
      .el-button:nth-child(2) {
        margin-right: 20px;
      }
    }
    /deep/ .el-input__inner {
      border-radius: 25px !important;
      background-color: rgb(233, 77, 71);
      border: 0;
    }
  }
  .right {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    // border: 1px solid black;
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
    .user {
      display: flex;
      align-items: center;
      img {
        margin-right: 10px;
      }
    }
    .item {
      margin-top: 10px;
      margin-right: 40px;
      i {
        font-size: 25px;
        cursor: pointer;
      }
    }
    /deep/ .is-fixed {
      top: 15px !important;
    }
    .el-icon-close {
      font-size: 30px;
      cursor: pointer;
    }
    .login_mask {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
      background: rgba(0, 0, 0, 0.5);
      //   display: none;
      z-index: 999;
      // animation: comeCardModel 1s linear;
      .login {
        width: 30%;
        height: 50%;
        padding: 0 3%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        background: url("../../../assets/images/auth.jpg") center no-repeat;
        background-size: 100% 100%;
        animation: backInRight;
        animation-duration: 1s;
        border: 1px solid black;
        .close_login {
          position: absolute;
          top: -15px;
          right: -15px;
        }
        .button_group {
          margin-left: auto;
        }
        .el-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
.v-enter {
  transform: translateX(-100%);
  // .login {
  //   transform: rotate(180deg);
  // }
}
.v-leave-to {
  transform: translateX(100%);
  .login {
    transform: scale(0.01, 0.01);
  }
}
.v-enter-active,
.v-leave-active {
  transition: all 1s linear;
  .login {
    transition: all 1s linear;
  }
}
</style>