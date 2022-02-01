import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import animate from "animate.css"; //引入animation动画
import ElementUI from "element-ui";
import { Message } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
//引入font-awesome
import "font-awesome/css/font-awesome.css";
//引入视频播放组件
import VideoPlayer from "vue-video-player";
import "vue-video-player/src/custom-theme.css";
import "video.js/dist/video-js.css";
Vue.use(VideoPlayer);

Vue.use(ElementUI);
Vue.use(animate);

Vue.prototype.$message = Message;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
