<template>
  <div class="top-song">
    <div class="title">
      <p>新歌速递</p>
    </div>
    <div class="content">
      <ul v-for="(item,index) in topSongList" :key="index">
        <li v-for="song in item" :key="song.album.id">
          <img :src="song.album.picUrl">
          <div class="name">
            <p>
              <span>{{song.name}}</span>
              <span v-if="song.alias.length" class="alias">（{{song.alias[0]}}）</span>
            </p>
            <p>
              <span>{{song.artists[0].name}}</span>
              <span v-if="song.artists[1]">{{'/'+song.artists[1].name}}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import service from '@/config/service'
export default {
  data(){
    return{
      topSongList:[]
    }
  },
  mounted(){
    this.getTopSong()
  },
  methods:{
    getTopSong(){
      this.$http.request({
        method: "post",
        url: service.home.TOP_SONG,
        data: {
          type: 0
        }
      }).then(res=>{
        if(res.data.code===200){
          let data = res.data.data
          this.topSongList.push(data.slice(0,3))
          this.topSongList.push(data.slice(3,6))
          this.topSongList.push(data.slice(6,9))
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .top-song {
    width: 90%;
    overflow: hidden;
    margin: 15px;
    margin-left: 5%;
    height: 220px;
    .title {
      width: 100%;
      height: 20px;
      p {
        float: left;
      }
    }
    .content {
      display: flex;
      width: 100%;
      flex-direction: row;
      overflow-x: scroll;
      padding-bottom: 30px;
      ul {
        display: flex;
        flex-direction: column;
        justify-content: start;
        li {
          width: 80vw;
          margin: 10px 0;
          img {
            float: left;
            width: 50px;
            border-radius: 5px;
          }
          .name {
            float: left;
            font-size: 10px;
            margin-left: 15px;
            display: flex;
            flex-direction: column;
            justify-content: start;
            p {
              width: 50vw;
              span {
                float: left;
              }
              .alias {
                
              }
            }
          }
        }
      }
    }
  }
</style>