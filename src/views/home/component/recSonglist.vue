<template>
  <div class="home-rec">
    <ul>
      <li v-for="item in songList" :key="item.id">
        <img :src="item.picUrl">
        <van-notice-bar
        :scrollable="item.name | isScrollFilter"
        :text="item.name"
        background="initial"
        color="rgb(95, 94, 94)"
        speed="20"
        />
        <span><van-icon name="play-circle-o" />{{item.playcount | playCountFilter}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import service from '@/config/service'
export default {
  data(){
    return{
      songList:[]
    }
  },
  mounted(){
    this.getSongList()
  },
  filters:{
    //推荐歌单播放量
    playCountFilter(value){
      if(value>9999&&value<100000000){
        return `${(value/10000).toFixed(0)}万`
      }
      else if(value>=100000000){
        return `${(value/100000000).toFixed(2)}亿`
      }
      else{
        return value
      }
    },
    //小于8个字不滚动
    isScrollFilter(name){
      if(name.length>8){
        return true
      }
      return false
    }
  },
  methods:{
    //获取每日歌单
    getSongList(){
      this.$http.request({
        method: 'post',
        url: service.home.REC_SONG_LIST,
      }).then(res=>{
        if(res.data.code===200){
          this.songList = res.data.recommend
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .home-rec {
    height: 140px;
    width: auto;
    overflow: hidden;
    margin-bottom: 30px;
    ul {
      display: flex;
      flex-direction: row;
      overflow-x: scroll;
      li {
        position: relative;
        display: flex;
        flex-direction: column;
        margin: 0 10px;
        img {
          width: 110px;
          height: auto;
          border-radius: 10px;
        }
        .van-notice-bar {
          width: 100%;
          padding: 0;
          .van-notice-bar__content {
            font-size: 8px;
          }
        }
        span {
          font-size: 5px;
          position: absolute;
          top: 5px;
          right: 5px;
          color: #fff;
          background: rgba(121, 121, 121, 0.226);
          border-radius: 8px;
          padding: 0 5px;
          font-size: 6px;
          .van-icon {
            margin-right: 5px;
          }
        }
      }
    }
  }
</style>