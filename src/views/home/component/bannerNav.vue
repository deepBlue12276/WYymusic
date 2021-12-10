<template>
  <div class="home-banner">
    <van-swipe
      autoplay="3000"
    >
      <van-swipe-item
        v-for="item in bannerList"
        :key="item.bannerId"
      >
        <img :src="item.pic" @click="jumpBanner(item.url)">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import service from '@/config/service'
export default {
  data(){
    return{
      bannerList:[]
    }
  },
  mounted(){
    this.getBanner()
  },
  methods:{
    jumpBanner(url){
      location.href = url
    },
    getBanner(){
      this.$http.request({
        method: 'post',
        url: service.home.HOME_BANNER,
        data: {
          type: 1
        }
      }).then(res=>{
        if(res.data.code===200){
          this.bannerList = res.data.banners
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .home-banner {
    width: 90%;
    margin-left: 5%;
    margin-top: 15px;
    img {
      width: 100%;
      height: auto;
      border-radius: 15px;
    }
  }
</style>