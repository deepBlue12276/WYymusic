<template>
  <div class="foot">
    <div class="mini-player">
      <div :class="{'music-img':true,rotate:isPlay}">
        <img src="@/assets/img/logo1.png">
      </div>
      <span class="music-name">暂无歌曲播放中</span>
      <span class="music-operation">
        <van-icon name="play" style="margin-right:10px" @click="isPlay=!isPlay" v-if="!isPlay"/>
        <van-icon name="pause" style="margin-right:10px" @click="isPlay=!isPlay" v-else/>
        <van-icon name="bars" @click="showMusicList=true"/>
      </span>
    </div>
    <ul class="tab">
      <li @click="changeTab('0')">
              <van-icon name="wap-home" v-if="tabIndex == '0'" class="choosed"/>
              <van-icon name="wap-home" v-else/>
              <p :class="tabIndex == '0'?'largeClass':''">首页</p>
            </li>
          <li @click="changeTab('1')">
              <van-icon name="music" v-if="tabIndex == '1'" class="choosed"/>
              <van-icon name="music" v-else/>
              <p :class="tabIndex == '1'?'largeClass':''">推荐</p>
          </li>
          <li @click="changeTab('2')">
              <van-icon name="manager" v-if="tabIndex == '2'" class="choosed"/>
              <van-icon name="manager" v-else/>
              <p :class="tabIndex == '2'?'largeClass':''">我的</p>
          </li>
    </ul>
      <van-action-sheet 
      v-model="showMusicList"
      title="播放列表"
      >
        <ul>
          <li>123</li>
        </ul>
      </van-action-sheet>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tabIndex: '0',
      isPlay: false,
      showMusicList: false
    }
  },
  methods:{
    openMusicList(){

    },
    changeTab(index){
      if(this.tabIndex===index){
        return
      }
      else{
        this.tabIndex=index
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .rotate {
    animation: rotate 5s infinite linear;
  }
  .choosed {
    color: rgb(16, 84, 243);
  }
  .foot {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    .van-popup {
      height: 70%;
      background-image: linear-gradient(rgb(201, 230, 241),#fff);
    }
    .mini-player {
      width: 100%;
      height: 50px;
      background: rgba(150, 150, 150, 0.233);
      display: flex;
      justify-content: space-around;
      .music-img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 3px solid rgb(48, 96, 124);
        margin-top: -10px;
        overflow: hidden;
        
        img {
          width:60px;
          height: auto;
        }
      }
      .music-name {
        line-height: 50px;
      }
      .music-operation {
        line-height: 50px;
        font-size: 20px;
      }
    }
    .tab {
      display: flex;
      padding-top: 5px;
      height: 50px;
      flex-direction: row;
      justify-content: space-around;
      li {
        i {
          font-size: 20px;
        }
      }
    }
  }
</style>