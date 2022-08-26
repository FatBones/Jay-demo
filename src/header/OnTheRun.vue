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
    name: 'OnTheRun',
    components: {
        GroupOfMusic, AlbumImg, MusicTitle, MusicPlayer, MusicWordsContainer
    },
    beforeCreate(){
      document.body.setAttribute('style', 'background-image: linear-gradient(to right, #824168, #9f505e, #af6754, #b28351, #aba05d);');

    },
    data(){
        return {
          musicTitle:'我很忙',
          allMusic:[
              {id:'01',name:'牛仔很忙',url:'/8.我很忙/牛仔很忙.mp3'},
              {id:'02',name:'彩虹',url:'/8.我很忙/彩虹.mp3'},
              {id:'03',name:'青花瓷',url:'/8.我很忙/青花瓷.mp3'},
              {id:'04',name:'阳光宅男',url:'/8.我很忙/阳光宅男.mp3'},
              {id:'05',name:'蒲公英的约定',url:'/8.我很忙/蒲公英的约定.mp3'},
              {id:'06',name:'无双',url:'/8.我很忙/无双.mp3'},
              {id:'07',name:'我不配',url:'/8.我很忙/我不配.mp3'},
              {id:'08',name:'扯',url:'/8.我很忙/扯.mp3'},
              {id:'09',name:'甜甜的',url:'/8.我很忙/甜甜的.mp3'},
              {id:'10',name:'最长的电影',url:'/8.我很忙/最长的电影.mp3'},
          ],
          imgUrl:require('../assets/album/我很忙.jpg'),
          len:'10'
        }   
    },
    methods:{
    }
};

</script>

<style snope>
* {
  margin: 0;
  padding: 0;
}

</style>
