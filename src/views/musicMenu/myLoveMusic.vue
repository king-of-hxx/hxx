<template>
  <div class="playListInfo">
    <my-love-music-header></my-love-music-header>
    <my-love-music-content></my-love-music-content>
  </div>
</template>
<script>
import myLoveMusicHeader from "@/components/music/myLoveMusic/myLoveMusicHeader.vue"
import myLoveMusicContent from "@/components/music/myLoveMusic/myLoveMusicContent.vue"
export default {
  components: {
    myLoveMusicHeader,
    myLoveMusicContent
  }
}
</script>
<style lang="scss" scoped>
.playListInfo {
  width: 100%;
  height: 586px;
  padding: 0px 30px;
  overflow: auto;
}
</style>