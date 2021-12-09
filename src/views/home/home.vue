<template>
  <div>
    <div class="home-content"></div>
    <foot-tab></foot-tab>
  </div>
</template>

<script>
import footTab from '@/components/foot/tab.vue'
export default {
  components:{
    footTab
  }
}
</script>

<style lang="less" scoped>
@import './home.less';
</style>