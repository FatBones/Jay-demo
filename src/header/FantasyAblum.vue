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
    // 异步
    // const MusicWordsContainer = Vue.component('MusicWordsContainer',(resolve)=>require(['../components/MusicWordsContainer'],resolve));
    export default {
    name: 'FantasyAblum',
    components: {
        GroupOfMusic, AlbumImg, MusicTitle, MusicPlayer, MusicWordsContainer
    },
    beforeCreate(){
      document.body.setAttribute('style', 'background:linear-gradient(to right, rgba(156,28,28,0.87), rgba(205,46,46,0.94)');

    },
    data(){
        return {
          musicTitle:'范特西',
          allMusic:[
            {id:'01',name:'爱在西元前',url:'/2.范特西/爱在西元前.mp3'},
            {id:'02',name:'爸，我回来了',url:'/2.范特西/爸，我回来了.mp3'},
            {id:'03',name:'简单爱',url:'/2.范特西/简单爱.mp3'},
            {id:'04',name:'忍者',url:'/2.范特西/忍者.mp3'},
            {id:'05',name:'开不了口',url:'/2.范特西/开不了口.mp3'},
            {id:'06',name:'上海一九四三',url:'/2.范特西/上海一九四三.mp3'},
            {id:'07',name:'对不起',url:'/2.范特西/对不起.mp3'},
            {id:'08',name:'威廉古堡',url:'/2.范特西/威廉古堡.mp3'},
            {id:'09',name:'双截棍',url:'/2.范特西/双截棍.mp3'},
            {id:'10',name:'安静',url:'/2.范特西/安静.mp3'},
          ],
          imgUrl:require('../assets/album/范特西.jpg'),
          len:'10'
        }   
    },
    methods:{
    }
};

</script>

<style snoped>
* {
  margin: 0;
  padding: 0;
}

</style>
