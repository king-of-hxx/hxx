<template>
  <div class="playListInfo">
    <play-list-info-header></play-list-info-header>
  </div>
</template>
<script>
import PlayListInfoHeader from "@/components/music/common/PlayListInfoHeader.vue"
export default {
  components: {
    PlayListInfoHeader
  }
}
</script>
<style lang="scss" scoped>
.playListInfo {
  width: 100%;
  padding: 0px 30px;
}
</style>