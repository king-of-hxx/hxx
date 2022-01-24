<template>
  <div class="music_header">
    <div class="left">
      <img src="@/assets/images/wangyiyun.png" alt="">
      <span>网抑云音乐</span>
    </div>
    <div class="center">
      <div class="button_group">
        <el-button @click="()=>{this.$router.go(-1)}" class="pre_button" icon="el-icon-arrow-left" circle size="mini"></el-button>
        <el-button class="next_button" icon="el-icon-arrow-right" circle size="mini"></el-button>
      </div>
      <el-input class="search_music" v-model="input" placeholder="搜索" prefix-icon="el-icon-search"></el-input>
    </div>
    <div class="right">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link" v-if="currentUserInfo==null">
          登录<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <span class="user" v-else>
          <img :src="currentUserInfo==null ? userImg : currentUserInfo.avatarUrl" alt="" />
          <span class="user_name" style="fontSize:13px;">{{currentUserInfo.nickname}}<i class="el-icon-arrow-down el-icon--right"></i></span>
        </span>
        <el-dropdown-menu slot="dropdown" class="login_menu" style="height:300px;width:300px">
          <div style="width: 300px;height:140px;display: flex;flex-direction: column;align-items: center;border-bottom:1px solid rgb(213, 214, 214)">
            <ul style="display: flex;padding:20px 0px">
              <li style="display: flex;flex-direction: column;align-items: center;">
                <span>{{ currentUserInfo==null? 0 : currentUserInfo.eventCount}}</span>
                <span>动态</span>
              </li>
              <li style="display: flex;flex-direction: column;align-items: center;margin:0px 50px">
                <span>{{ currentUserInfo==null? 0 : currentUserInfo.follows}}</span>
                <span>关注</span>
              </li>
              <li style="display: flex;flex-direction: column;align-items: center;">
                <span>{{ currentUserInfo==null? 0 : currentUserInfo.followeds}}</span>
                <span>粉丝</span>
              </li>
            </ul>
            <el-upload class="avatar-uploader" ref="upload" action="#" :http-request="uploadImg" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
              <el-button round>修改头像</el-button>
            </el-upload>
          </div>
          <el-dropdown-item @click.native="openLogin"><i class="el-icon-mobile-phone"></i>手机号登录</el-dropdown-item>
          <el-dropdown-item @click.native="qrcodeLogin"><i class="fa fa-qrcode"></i>二维码登录</el-dropdown-item>
          <el-dropdown-item @click.native="logoutDialogVisible=true"><i class="fa fa-sign-out"></i>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span v-if="currentUserInfo" class="user_level">Lv{{ currentUserInfo==null? 0 : currentUserInfo.level}}</span>
      <i class="el-icon-refresh-left" @click="refresh"></i>
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
              <el-button type="primary" @click="confirmLogin">登录</el-button>
            </div>
          </div>
        </div>
      </transition>
      <el-dialog title="扫码登录" :visible.sync="dialogVisible" width="30%" :close-on-click-modal=false :modal=false center>
        <img :src="qrimg" style="width:100%;height:260px;display:flex" alt="">
        <span slot="footer" class="dialog-footer">
          <font color="black">使用</font>
          <span style="color:rgb(69,148,208)">网易云APP</span>
          <font color="black">扫码登录</font>
        </span>
      </el-dialog>
      <el-dialog title="提示" :visible.sync="logoutDialogVisible" width="40%" :close-on-click-modal=false :modal=false center>
        <span>是否确定退出当前用户?</span>
        <span slot="footer">
          <el-button type="primary" @click="loginOut">确 定</el-button>
          <el-button @click="logoutDialogVisible = false">取 消</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { getPhoneLoginOut, qrcodeLogin, createQrcode, checkQrcodeStatus, getPhoneLoginRefresh, uploadAvatar } from "@/apis/login"
// import { setProfile } from "@/utils/localStrorage";
export default {
  data() {
    return {
      input: '',
      userImg: require("@/assets/images/login_person.png"),
      isCloseCardModel: true, //显示登陆框
      loginInfoRules: {
        phone: [{ required: true, message: " ", trigger: "blur" }],
        password: [{ required: true, message: " ", trigger: "blur" }]
      }, // 登录格式的校验
      form: {
        phone: "15555643262",
        password: "hxx123456789"
      },
      formLabelWidth: "80px", //登录内输入框的宽度
      //二维码相关数据
      dialogVisible: false,
      unikey: '',
      qrimg: '',
      qrurl: '',
      qrCheckData: {},
      isLogin: false,
      //退出登录
      logoutDialogVisible: false
    }
  },
  computed: {
    ...mapState('login', ['currentUserInfo'])
  },
  watch: {
    currentUserInfo() {
      this.$forceUpdate()
    }
  },
  created() {
    console.log(this.currentUserInfo);
  },
  methods: {
    openLogin() {
      this.isCloseCardModel = false;
    },
    cancelLogin() {
      this.isCloseCardModel = true;
    },
    //手机号登录
    confirmLogin() {
      this.$store.dispatch('login/getCurrentUserInfo', this.form)
      this.isCloseCardModel = true;
    },
    //二维码登录
    async qrcodeLogin() {
      this.dialogVisible = true
      let date = new Date().getTime()
      const res = await qrcodeLogin(date)
      this.unikey = res.data.data.unikey;
      // console.log(this.unikey);
      const qrcode = await createQrcode(date, this.unikey, true)
      const { qrimg, qrurl } = qrcode.data.data
      this.qrimg = qrimg
      this.qrurl = qrurl
      // console.log(1111, qrcode);
      this.checkStatus()
    },
    //二维码检测扫码状态
    checkStatus() {
      let time = setInterval(async () => {
        let date = new Date().getTime()
        const checkStatus = await checkQrcodeStatus(date, this.unikey)
        console.log(checkStatus);
        const { code, message } = checkStatus.data
        if (this.dialogVisible == false) {
          clearInterval(time)
        }
        if (code === 800) {
          this.$message.error(message);
        } else if (code === 803) {
          this.dialogVisible = false
          this.isLogin = true
          this.$message.success(message);
          clearInterval(time)
          this.$store.dispatch('login/getQrcodeUserInfo')
          setTimeout(() => {
            this.$router.go(0)
          }, 1000)
        }
      }, 3000)
    },
    //刷新登录状态
    async refresh() {
      await getPhoneLoginRefresh();
    },
    loginOut() {
      getPhoneLoginOut().then(res => {
        if (res.data.code == 200) {
          //当前用户信息设置为null
          this.currentUserInfo = null;
          //存储用户信息的localstorage设置为null
          window.localStorage.setItem("currentUserInfo", null);
          window.localStorage.setItem('token', null)
          window.localStorage.setItem('musicIds', null)
          this.userImg = require("@/assets/images/login_person.png");
          this.$message.success('退出登录成功!')
          setTimeout(() => {
            location.reload()
          }, 500)
        } else {
          this.$message.error('退出失败!')
        }
      })
    },
    //上传头像事件
    async uploadImg(option) {
      const file = option.file
      var formData = new FormData()
      formData.append('imgFile', file)
      const res = await uploadAvatar(formData, 1000, new Date().getTime())
      if (res.data.code === 200) {
        this.$refs.upload.clearFiles();
        let avatarUrl = res.data.data.url
        this.$store.commit('login/GetChangeUserImg', avatarUrl)
        // let userImgObj = { avatarUrl }
        // console.log(userImgObj);
        // let currentUser = { ...this.currentUserInfo, ...userImgObj }
        // setProfile(currentUser)
        this.$message.success('图片上传成功!')
        // setTimeout(() => {
        //   location.reload()
        // }, 500)
      }
      console.log(res.data);
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
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
      .pre_button,
      .next_button {
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
    .user {
      display: flex;
      align-items: center;
      color: white;
      position: relative;
      img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
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
    .el-icon-close,
    .el-icon-refresh-left {
      font-size: 25px;
      cursor: pointer;
    }
    .dialog-footer {
      display: flex;
      justify-content: center;
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
        width: 50%;
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
.el-dropdown-link {
  cursor: pointer;
  color: white;
}
.el-icon-arrow-down {
  font-size: 16px;
}
/deep/ .el-dropdown {
  line-height: 55px;
}
/deep/ .el-dropdown-menu__item {
  width: 100%;
  text-align: center;
}
/deep/ .el-dropdown-menu__item:hover {
  background-color: rgb(240, 241, 242);
}
</style>