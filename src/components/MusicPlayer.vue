<template>
  <div class="MusicPlayer" ref="MusicPlayer">

    <div class="progressContainer" ref="progressContainer" @click="setPlaceFun($event)">
      <div class="progress" ref="progress"></div>
    </div>
    <div class="beginPlace" ref="beginPlace"></div>
    <div class="endPlace" ref="endPlace"></div>
    <span>
        <a id="Last" href="javascript:;"><img id="shangYiShou" src="../assets/img/上一首.png" @click="lastFun()"></a>
        <a id="BigBegin" href="javascript:;"><img class="daBoFang" ref="daBoFang" :src="BigIcon" @click="holdFun()"></a>
        <a id="Next" href="javascript:;"><img id="xiaYiShou" src="../assets/img/下一首.png" @click="nextFun()"></a>
        <span id="volumeGroup" ref="volumeGroup" @mouseout="hiddenVolumeFun()" @mouseover="showVolumeFun()">
            <a id="volume" href="javascript:;">
                <img class="yinLiang" ref="yinLiang" src="../assets/img/声音.png" @click="muteOrNotFun()">
                <div class="volumeContainer" ref="volumeContainer" @click="setVolumeFun($event)">
                    <div class="volumeLength" ref="volumeLength"></div>
                </div>
            </a>
        </span>
    </span>
  </div>
</template>

<script>
let v;
export default {
    name:'MusicPlayer',
    data(){
        return {
            BigIcon:"",
            runningMusic:"",
            allMusic:"",
            allAudios:"",
            allIcon:"",
            getId:"",
        }
    },
    mounted(){
        this.$bus.$on("getParams",(allAudios, allIcon,allMusic)=>{
            this.allAudios = allAudios;
            this.allIcon = allIcon;
            this.allMusic = allMusic;
        }),
        this.$bus.$on("runningMusic",(params,params1)=>{
            this.runningMusic = params;
            this.getId = params1;
        }),
        this.$bus.$on("changeIcon",(isRunning)=>{
            if(isRunning)this.BigIcon = require("../assets/img/Big暂停.png");
            else this.BigIcon = require("../assets/img/Big播放.png");
            
        }),
        this.$bus.$on("useInnerEndFun",this.useInnerEndFun),
        this.$bus.$on("updateFun",this.updateFun)
    },
    beforeDestroy(){
        this.$bus.$off(["getParams","runningMusic","changeIcon","showMusicPlayer","useInnerEndFun","updateFun",])
    },
    watch:{
        runningMusic:function(){
            if(this.runningMusic !== ""){
                this.$refs.MusicPlayer.style.opacity = "1";
            }
        }
        
    },
    methods:{
        //显示音量
        showVolumeFun(){
            this.$refs.volumeContainer.style.display = "inline";
        }
        //不显示音量
        ,hiddenVolumeFun(){
            this.$refs.volumeContainer.style.display = "none";
        }
        //设置音量
        ,setVolumeFun(event){
            let x = event.offsetX;
            v = x / this.$refs.volumeContainer.clientWidth;
            this.$refs.volumeLength.style.width = v * 100 + "%";
            if(this.runningMusic != undefined)this.runningMusic.volume = v;
            for(let i=0;i<this.allAudios.length;i++){
                this.allAudios[i].volume = v;
            }
            this.$refs.yinLiang.src = require("../assets/img/声音.png");
        }
        //静音或解除静音
        ,muteOrNotFun(){
            if(this.runningMusic.volume === 0){
                for(let i=0;i<this.allAudios.length;i++){
                    this.allAudios[i].volume = 0.5;
                }
                this.$refs.yinLiang.src = require("../assets/img/声音.png");
                this.$refs.volumeLength.style.width = "50%";
            }else if(!this.runningMusic.muted){
                for(let i=0;i<this.allAudios.length;i++){
                    this.allAudios[i].volume = 0;
                }
                this.$refs.yinLiang.src =  require("../assets/img/静音.png");
                this.$refs.volumeLength.style.width = "0%";
            }
        }
        //点击进度条，跳转音频位置
        ,setPlaceFun(event){
            let x = event.offsetX;
            if(this.runningMusic!=undefined)
            this.runningMusic.currentTime = x / this.$refs.progressContainer.clientWidth * this.runningMusic.duration;
            else if(this.runningMusic === undefined)alert(1);
        }
        //随着音频播放，进度条自动前进
        ,updateFun(){
            let percent = this.runningMusic.currentTime / this.runningMusic.duration * 100;
            this.$refs.progress.style.width = percent + "%";
            
            this.$bus.$emit('getTime',this.runningMusic.currentTime);
            this.useInnerBeginFun();
        }
        //
        ,innerBeginFun(begin){
            this.$refs.beginPlace.innerHTML = begin;
        }
        //显示音频总长度
        ,innerEndFun(end){
            this.$refs.endPlace.innerHTML = end;
        }
        //调用innerBeginFun
        ,useInnerBeginFun(){
            let beginSec,beginMin,begin_0;
            beginSec = parseInt(this.runningMusic.currentTime % 60);
            beginMin = parseInt(this.runningMusic.currentTime / 60);
            begin_0 = beginSec>9?beginSec:"0"+beginSec;
            this.innerBeginFun("0"+beginMin+":"+begin_0);
        }
        //调用innerEndFun
        ,useInnerEndFun(){
            let endSec = parseInt(this.runningMusic.duration%60);
            let endMin = parseInt(this.runningMusic.duration/60);
            let end_0 = endSec>9?endSec:"0"+endSec;
            this.innerEndFun("0"+endMin+":"+end_0);
        }
        //下一首
        ,nextFun(){
            if(this.allIcon[this.getId])
            this.allIcon[this.getId].src = require("../assets/img/播放.png");
            this.getId++;
            if(this.getId > this.allAudios.length-1)this.getId = 0;
            this.runningMusic.load();
            this.allAudios[this.getId].play();
            if(this.allIcon[this.getId])
            this.allIcon[this.getId].src = require("../assets/img/暂停.png");
            this.BigIcon = require("../assets/img/Big暂停.png");
            this.runningMusic = this.allAudios[this.getId];
            this.$bus.$emit('showWord',this.allMusic[this.getId].name);
            this.$bus.$emit('updateGetId',this.getId);
            this.$bus.$emit('changeImg',this.allMusic[this.getId].albumName)
            this.useInnerEndFun();
        }
        //上一首
        ,lastFun(){
            if(this.allIcon[this.getId])
            this.allIcon[this.getId].src = require("../assets/img/播放.png");
            this.getId--;
            if(this.getId < 0)this.getId = this.allAudios.length-1;
            this.runningMusic.load();
            this.allAudios[this.getId].play(); 
            if(this.allIcon[this.getId])
            this.allIcon[this.getId].src = require("../assets/img/暂停.png");
            this.BigIcon = require("../assets/img/Big暂停.png");
            this.runningMusic = this.allAudios[this.getId];
            this.$bus.$emit('showWord',this.allMusic[this.getId].name);
            this.$bus.$emit('updateGetId',this.getId);
            this.$bus.$emit('changeImg',this.allMusic[this.getId].albumName)
            this.useInnerEndFun();
        }
        //暂停
        ,holdFun(){
            if(this.runningMusic.paused){
                this.runningMusic.play();
                this.BigIcon = require("../assets/img/Big暂停.png");
                if(this.allIcon[this.getId])
                this.allIcon[this.getId].src = require("../assets/img/暂停.png");
                this.$bus.$emit('ratate',true);
            }
            else{
                this.runningMusic.pause();
                this.BigIcon = require("../assets/img/Big播放.png");
                if(this.allIcon[this.getId])
                this.allIcon[this.getId].src = require("../assets/img/播放.png");
                this.$bus.$emit('ratate',false);
            }
            
        }
        
    },
    
}
</script>

<style scoped>
    .MusicPlayer{
        width: 700px;
        height: 80px;
        position: absolute;
        bottom: 10px;
        left: 425px;
        border-radius: 20px;
        opacity: 0;
    }
    .daBoFang{
        width: 50px;
        height: 50px;
        border-radius: 25px;
    }
    #shangYiShou, #xiaYiShou{
        width: 30px;
        height: 30px;
        border-radius: 10px;
    }

    #shangYiShou{
        position: absolute;
        left: 265px;
        top: 40px;
    }
    #BigBegin{
        position: absolute;
        left: 320px;
        top: 30px;
    }
    #xiaYiShou{
        position: absolute;
        left: 395px;
        top: 40px;
    }

    #shangYiShou:hover, .daBoFang:hover, #xiaYiShou:hover{
        background: rgba(0,0,0,0.2);
    }
    .beginPlace, .endPlace{
        font-family: "Harlow Solid";
        color: rgba(0,0,0,0.5);
        text-align: center;
        width: 50px;
        height: 30px;
        position: absolute;
        cursor: default;
    }
    .beginPlace{
        top: 7.5px;
        left: 65px;
    }
    .endPlace{
        top: 7.5px;
        right: 65px;
    }
    #volumeGroup{
        position: absolute;
        top: 43px;
        left: 500px;
        width: 100px;
        height: 25px;
    }
    .yinLiang{
        width: 25px;
        height: 25px;
        border-radius: 10px;
        position: absolute;
    }
    .volumeContainer{
        width: 80px;
        height: 4px;
        background: rgba(255,255,255,0.3);
        border-radius: 2px;
        position: absolute;
        top: 10px;
        left: 30px;
        display: none;
        cursor: pointer;
        transition: 0.5s;
    }
    .volumeLength{
        background: rgba(0,0,0,0.5);
        border-radius: 2px;
        height: 100%;
        width: 100%;
    }
        /*
    实现进度条
    */
    .progressContainer{
        background: rgba(255,255,255,0.3);
        margin: 15px auto;
        height: 3px;
        border-radius: 2px;
        width: 450px;
        cursor: pointer;
    }
    .progress{
        background: rgba(0,0,0,0.5);
        border-radius: 2px;
        height: 100%;
        width: 0%;
        transition: width 0.1s linear;
    }
</style>