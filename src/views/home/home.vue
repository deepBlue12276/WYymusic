<template>
  <div>
    <div class="home-content">
      <banner-nav></banner-nav>
      <menu-nav></menu-nav>
      <rec-song-list></rec-song-list>
      <rec-mv></rec-mv>
      <top-song></top-song>
    </div>
    <foot-tab></foot-tab>
  </div>
</template>

<script>
import footTab from '@/components/foot/tab.vue'
import bannerNav from './component/bannerNav.vue'
import menuNav from './component/nav.vue'
import recSongList from './component/recSonglist.vue'
import recMv from './component/recMV.vue'
import topSong from './component/topSong.vue'
export default {
  components:{
    footTab,
    bannerNav,
    menuNav,
    recSongList,
    recMv,
    topSong,
  }
}
</script>

<style lang="less" scoped>
@import './home.less';
</style>