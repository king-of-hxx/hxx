<template>
  <div>
    <span>404 Not Found</span>
    <span>该博主暂还没想好博客的页面排版和相关技术分享。。。</span>
    <div class="name">--郝郝先生</div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  span:first-child {
    font-size: 30px;
  }
  span:nth-child(2) {
    display: flex;
    align-items: center;
    color: rgb(255, 127, 127);
    font-size: 20px;
  }
  .name {
    margin-top: 50px;
    color: rgb(0, 255, 106);
  }
}
</style>