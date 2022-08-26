<template>
  <div>
    <div class="MusicBar" ref="MusicBar">
      <p class="MusicName">{{ music.name }}</p>
      <audio
        class="audio"
        ref="audio"
        hidden="hidden"
        controls="controls"
        @ended="endFun()"
        @timeupdate="updateFun()"
        :src="audioSrc"
      ></audio>
      <span class="Group" ref="Group">
        <a class="begin" href="javascript:;"
          ><img
            class="zanTing"
            ref="zanTing"
            :src="zanTingSrc"
            @click="clickFun()"
        /></a>
        <a class="admire" href="javascript:;"
          ><img class="dianZan" src="../assets/img/点赞.png"
        /></a>
        <a class="keep" href="javascript:;"
          ><img class="xiaZai" src="../assets/img/收藏.png" @click="keep(music.name,albumName)"
        /></a>
      </span>
    </div>
  </div>
</template>

<script>
import {addSong} from '../api/index'
import { Message } from 'element-ui';

let audio = document.getElementsByClassName("audio");
let zanTing = document.getElementsByClassName("zanTing");
let getId;
export default {
  name: "EveryMusic",
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!动态指定url！！！！！！！！！！！！！！！！！！！！！！！！！！
  data() {
    return {
      audioSrc: require("../assets/audio" + this.music.url),
      zanTingSrc: require("../assets/img/播放.png"),
    };
  },
  props: ["music", "len", "allMusic", "albumName"],
  mounted() {
    this.$nextTick(function () {
      //思考一下怎么放在其他地方只触发一次
      this.$bus.$emit("getParams", audio, zanTing, this.allMusic);
    });
    this.$bus.$on("updateGetId",(Id)=>{
        getId = Id;
    })
    this.judge();
  },
  beforeDestroy(){
    this.$bus.$off(['updateGetId']);
  },
  methods: {
    // 歌曲数量自适应
    judge() {
      if (parseInt(this.len) === 11) {
        this.$refs.MusicBar.style.height = "35px";
        this.$refs.Group.style.bottom = "33px";
      }else if(parseInt(this.len) === 12){ 
        this.$refs.MusicBar.style.height = "32px";
        this.$refs.Group.style.bottom = "33px";
      }
    },
    //点击播放键
    clickFun() {
      getId = parseInt(this.music.id) - 1;
      this.playFun();
      this.updateFun();
    },
    //播放
    playFun() {
      
      if (audio[getId].paused) {
        zanTing[getId].src = require("../assets/img/暂停.png");
        this.$bus.$emit("changeIcon", true);
        //后期换个动画承载，这个就当返回首页
        this.$bus.$emit("ratate", true);
        //暂停其他歌
        for (let j = 0; j < audio.length; j++) {
          if (j === getId) continue;
          if (audio[j].played) {
            audio[j].load();
            zanTing[j].src = require("../assets/img/播放.png");
          }
        }
        audio[getId].play();
        this.$bus.$emit("showWord", this.allMusic[getId].name);
        this.$bus.$emit("runningMusic", audio[getId], getId);
        this.$bus.$emit("useInnerEndFun");
      } else {
        audio[getId].pause();
        zanTing[getId].src = require("../assets/img/播放.png");
        this.$bus.$emit("changeIcon", false);
        this.$bus.$emit("ratate", false);
      }
    },
    //当播放完毕时，自动播放下一首
    endFun() {
      getId++;
      if (getId > audio.length - 1)getId = 0;
      this.playFun();
    },
    //随音乐更改进度条
    updateFun() {
      this.$bus.$emit("updateFun");
    },
    // 收藏音乐
    async keep(name,albumName){
      let songSrc = this.music.url;
      let params = new URLSearchParams()
      params.append('name',name)
      params.append('songSrc',songSrc)
      params.append('albumName',albumName)
      let result = await addSong(params)
      if(result.statusbar === 0)
        Message.success({
          message: '添加成功',
          center: true,
          duration: 1000
        })
      else if(result.statusbar === 1) 
        Message.warning({
          message: '已添加',
          center: true,
          duration: 1000
        })
    }
  },
};
</script>

<style scoped>
</style>