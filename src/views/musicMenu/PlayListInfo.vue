<template>
  <div class="playListInfo">
    <play-list-info-header></play-list-info-header>
    <play-list-info-content></play-list-info-content>
  </div>
</template>
<script>
import PlayListInfoHeader from "@/components/music/songDetail/PlayListInfoHeader.vue"
import PlayListInfoContent from "@/components/music/songDetail/PlayListInfoContent.vue"
export default {
  components: {
    PlayListInfoHeader,
    PlayListInfoContent
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