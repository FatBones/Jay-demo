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
    name: 'BedStory',
    components: {
        GroupOfMusic, AlbumImg, MusicTitle, MusicPlayer, MusicWordsContainer
    },
    beforeCreate(){
      document.body.setAttribute('style', 'background-image: linear-gradient(to right, #824168, #9f505e, #af6754, #b28351, #aba05d);');

    },
    data(){
        return {
          musicTitle:'周杰伦的床边故事',
          allMusic:[
              {id:'01',name:'床边故事',url:'/14.周杰伦的床边故事/床边故事.mp3'},
              {id:'02',name:'说走就走',url:'/14.周杰伦的床边故事/说走就走.mp3'},
              {id:'03',name:'一点点',url:'/14.周杰伦的床边故事/一点点.mp3'},
              {id:'04',name:'前世情人',url:'/14.周杰伦的床边故事/前世情人.mp3'},
              {id:'05',name:'英雄',url:'/14.周杰伦的床边故事/英雄.mp3'},
              {id:'06',name:'不该',url:'/14.周杰伦的床边故事/不该.mp3'},
              {id:'07',name:'土耳其冰淇淋',url:'/14.周杰伦的床边故事/土耳其冰淇淋.mp3'},
              {id:'08',name:'告白气球',url:'/14.周杰伦的床边故事/告白气球.mp3'},
              {id:'09',name:'Now You See Me',url:'/14.周杰伦的床边故事/Now You See Me.mp3'},
              {id:'10',name:'爱情废材',url:'/14.周杰伦的床边故事/爱情废材.mp3'},
          ],
          imgUrl:require('../assets/album/周杰伦的床边故事.jpg'),
          len:'10'
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

</style>
