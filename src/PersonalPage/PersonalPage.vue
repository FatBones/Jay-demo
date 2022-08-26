<template>
  <div id='out'>

    <div class="person">
      <!-- <div class="headPic" > -->
        <!-- <img :src="require('../assets/personPic/头像.jpg')" alt="" ref="headImg"> -->
        <UserAvatar/>

        <!-- <input type="file" name="" id="" ref="fileSelector" @change="changePic"> -->
      <!-- </div> -->
      <p class="personalId">{{userName}}</p>
    </div>

    <div class='items'>
      <ul class="song-group">
        <li class="song" v-for="(i,index) in information" :key="index" @click.once="clickFun(index)">
          {{i.name}}
          <audio class="audio" ref="audio" :src="require('../assets/audio'+information[index].songSrc)" @ended="endFun()" @timeupdate="updateFun()"></audio>
          <img ref="delete" slot="reference" class="el-icon-delete" src="" @click="deleteSong(i.name)">
        </li>
      </ul>
    </div>

    <div class="people-container" ref="container">
      <div class="album">
        <img class="img" :src="imgUrl" alt="">
      </div>
    </div>

    <MusicWordsContainer/>

    <MusicPlayer/>
    
  </div>
</template>

<script>
import MusicWordsContainer from '../components/MusicWordsContainer.vue'
import MusicPlayer from '../components/MusicPlayer.vue'
import UserAvatar from './UserAvatar.vue'

import { selectSong, deleteSong, } from '../api/index';
import { Message } from 'element-ui';

let audio = document.getElementsByClassName('audio');
let songId;
export default {
  components:{MusicWordsContainer, MusicPlayer, UserAvatar},
  inject:['reload'],
  data(){
    return {
      // 名字
      userName:'Fat_Bones',
      // 专辑图片
      imgUrl:"",
      // 收藏的歌曲
      information:{},
      // 头像
      userPic: '',
    }
  },
  beforeCreate(){
      document.body.setAttribute('style', 'background-image: linear-gradient(to right, #578c94, #559398, #52999c, #51a09f, #50a6a1);');
    },
  beforeMount(){
    this.getSong()
  },
  mounted(){
    this.$bus.$on('changeImg',(adress) => {
      this.imgUrl = require(`../assets/album/${adress}.jpg`);
    })
  },
  beforeDestroy(){
    this.$bus.$off(['changeImg'])
  },
  methods:{
    async getSong(){
      let result = await selectSong()
      this.information = result.data
      this.$bus.$emit("getParams", audio, "", this.information);
    },
    clickFun(index){
      songId = index;
      this.playFun();
    },
    playFun(){
      this.imgUrl = require(`../assets/album/${this.information[songId].albumName}.jpg`);
      if(audio[songId].paused){
        this.$bus.$emit("changeIcon", true);
        for (let j = 0; j < audio.length; j++) {
          if (j === songId) continue;
          if (audio[j].played) audio[j].load();
        }
        audio[songId].play();
        this.$bus.$emit("runningMusic", audio[songId], songId);
        this.$bus.$emit("showWord",this.information[songId].name);
        this.$bus.$emit("useInnerEndFun");
      }else {
        audio[songId].pause();
        this.$bus.$emit("changeIcon", false);
      }
      this.$refs.container.style.display = 'inline';
    },
    endFun() {
      songId++;
      if (songId > audio.length - 1)songId = 0;
      this.playFun(songId);
    },
    updateFun(){
      this.$bus.$emit("updateFun");
    },
    async deleteSong(name){
      let params = new URLSearchParams()
      params.append('name',name)
      let result = await deleteSong(params) 
      if(result.statusbar === 0){
        Message.success({
          message: '删除成功',
          center: true,
          duration: 1000
        })
        this.reload()
      }else Message.fail({
        message: '删除失败',
        center: true,
        duration: 1000
      })
    },
    
  }
  
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  ::-webkit-scrollbar{
    width: 4px;
    height: 1px;
  }
  ::-webkit-scrollbar-thumb{
    border-radius: 10px;
    /* box-shadow: inset 0 0 5px rgba(97, 184, 179,0.1); */
    background: #78b4b4;
  }
  ::-webkit-scrollbar-track{
    /* box-shadow: inset 0 0 5px rgba(87, 175, 179,0.1); */
    border-radius: 10px;
    background-color: hidden;
  }
  .person{
    display: inline;
    width: 500px;
    position: absolute;
    top: 50px;
    left: 100px;
  }
  /* .headPic{
    height: 100px;
    width: 100px;
    border-radius: 50px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    cursor: pointer
  } */
  /* .headPic:hover{
    opacity: 0.7;
  } */
  /* .headPic img{
    height: inherit;
    width: inherit;
    border-radius: 50px;
  } */
  .personalId{
    position: absolute;
    bottom: 15px;
    left: 120px;
    font-size: 20px;
    font-family: '腾祥爱情体简';
  }
  #out{
    display: flex;
    height: 0;
  }
  .items{
    height: 500px;
    width: 500px;
    border-radius: 50px;
    background: rgba(97, 87, 87, 0.1);
    margin: 150px auto;
    box-shadow: 0 0 15px rgba(60, 56, 56, 0.2);
  }
  .song-group{
    position: relative;
    top: 50px;
    height: 400px;
    width: 100%;
    overflow: scroll;
  }
  .song{
    font-family: '腾祥婀娜体简';
    position: relative;
    line-height: 40px;
    text-align: center;
    display: block;
    border: 2px rgba(255,255,255,0.2);
    border-radius: 1px;
    cursor:pointer
  }
  .song:hover{
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }
  .song:hover .el-icon-delete{
    display: inherit;
  }
  .people-container{
    position: absolute;
    height: 500px;
    width: 300px;
    border-radius: 20px;
    top: 100px;
    right: 30px;
    display: none;
  }
  .album{
    position: relative;
    height: 120px;
    width: 120px;
    border-radius: 60px;
    top: 20px;
    left: 90px;  
  }
  .img{
    width: inherit;
    height: inherit;
    border-radius: 75px;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
    opacity: 0.9;
    animation: revolve 15s linear infinite;
  }
  @keyframes revolve {
    from{transform: rotate(0)}
    to{transform: rotate(360deg);}
  }
  .el-icon-delete{
    position: absolute;
    right: 50px;
    top: 10px;
    display: none;
    transition: display 0.5s;
    z-index: 99;
  }
</style>