<template>
  <div>
    <MusicTitle :musicTitle="musicTitle"/>
    <GroupOfMusic :allMusic="allMusic" :albumName="musicTitle"/>
    <AlbumImg :imgUrl="imgUrl"/>
    <MusicPlayer/>
    <MusicWordsContainer/>
  </div>
</template>

<script>
    import GroupOfMusic from "../components/GroupOfMusic.vue";
    import AlbumImg from "../components/AlbumImg.vue";
    import MusicTitle from "../components/MusicTitle.vue";
    import MusicPlayer from "../components/MusicPlayer.vue";
    import MusicWordsContainer from "../components/MusicWordsContainer.vue";

    export default {
    name: 'CrossAge',
    
    components: {
        GroupOfMusic, AlbumImg, MusicTitle, MusicPlayer, MusicWordsContainer
    },
    beforeCreate(){
      document.body.setAttribute('style', 'background-image: linear-gradient(to left, #387e82, #2e7583, #2a6c82, #2d637f, #34597a);');

    },
    data(){
        return {
          musicTitle:'跨时代',
          allMusic:[
              {id:'01',name:'跨时代',url:'/10.跨时代/跨时代.mp3'},
              {id:'02',name:'说了再见',url:'/10.跨时代/说了再见.mp3'},
              {id:'03',name:'烟花易冷',url:'/10.跨时代/烟花易冷.mp3'},
              {id:'04',name:'免费教学录影带',url:'/10.跨时代/免费教学录影带.mp3'},
              {id:'05',name:'好久不见',url:'/10.跨时代/好久不见.mp3'},
              {id:'06',name:'雨下一整晚',url:'/10.跨时代/雨下一整晚.mp3'},
              {id:'07',name:'嘻哈空姐',url:'/10.跨时代/嘻哈空姐.mp3'},
              {id:'08',name:'我落泪情绪零碎',url:'/10.跨时代/我落泪情绪零碎.mp3'},
              {id:'09',name:'爱的飞行日记',url:'/10.跨时代/爱的飞行日记.mp3'},
              {id:'10',name:'自导自演',url:'/10.跨时代/自导自演.mp3'},
              {id:'11',name:'超人不会飞',url:'/10.跨时代/超人不会飞.mp3'},
          ],
          imgUrl:require('../assets/album/跨时代.jpg'),
          len:'11'
        }   
    },
    methods:{
    }
};

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.MusicBar{
  width: 500px;
  height: 35px;

}
.Group{
  bottom: 33px;
}
</style>
