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
              <img v-if="tabIndex == '0'" src="@/assets/img/tab/tab_home.png">
              <img v-else src="@/assets/img/tab/noHome.png">
              <p :class="tabIndex == '0'?'largeClass':''">首页</p>
            </li>
          <li @click="changeTab('1')">
              <img v-if="tabIndex == '1'" src="@/assets/img/tab/tab_car.png">
              <img v-else src="@/assets/img/tab/noCar.png">
              <p :class="tabIndex == '1'?'largeClass':''">推荐</p>
          </li>
          <li @click="changeTab('2')">
              <img v-if="tabIndex == '2'" src="@/assets/img/tab/tab_mine.png">
              <img v-else src="@/assets/img/tab/noMine.png">
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
  .foot {
    position: fixed;
    bottom: 0;
    width: 100%;
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
        img {
          width: 25px;
          height: auto;
        }
      }
    }
  }
</style>