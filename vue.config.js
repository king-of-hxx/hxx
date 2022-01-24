module.exports = {
  devServer: {
    proxy: {
      //解决跨域问题
      "/api": {
        //此处的写法，目的是为了将/api 替换成https://autumnfish.cn/
        // target: "https://autumnfish.cn/",
        // target: "http://music.eleuu.com/",
        target: "https://hxx-cloud-music-api.vercel.app/",
        //允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
