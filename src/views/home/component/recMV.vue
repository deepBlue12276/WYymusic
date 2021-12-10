<template>
  <div class="rec-mv">
    <div class="title">
      <p>你的专属推荐MV</p>
    </div>
    <ul>
      <li v-for="item in MVList" :key="item.id">
        <img :src="item.picUrl">
        <van-notice-bar
        wrapable
        :text="item.name"
        background="initial"
        color="rgb(43, 42, 42)"
        />
        <span><van-icon name="play-circle-o" />{{item.playCount | playCountFilter}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import service from '@/config/service'
export default {
  data(){
    return{
      MVList:[]
    }
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
  },
  mounted(){
    this.getMVList()
  },
  methods:{
    getMVList(){
      this.$http.request({
        method: 'post',
        url: service.home.REC_MV,
      }).then(res=>{
        if(res.data.code===200){
          this.MVList = res.data.result
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .rec-mv {
    height: 160px;
    width: auto;
    overflow: hidden;
    .title {
      width: 100%;
      height: 30px;
      margin-left: 15px;
      font-weight: 600;
      p {
        float: left;
      }
    }
    ul {
      display: flex;
      flex-direction: row;
      overflow-x: scroll;
      padding-bottom: 20px;
      li {
        position: relative;
        display: flex;
        flex-direction: column;
        margin: 0 10px;
        img {
          width: 110px;
          height: 62px;
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