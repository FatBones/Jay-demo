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
    name: 'XiaoBangAblum',
    
    components: {
        GroupOfMusic, AlbumImg, MusicTitle, MusicPlayer, MusicWordsContainer
    },
    beforeCreate(){
      document.body.setAttribute('style', 'background:linear-gradient(to right, #392b1a, #e39d55');

    },
    data(){
        return {
          musicTitle:'11月的肖邦',
          allMusic:[
              {id:'01',name:'夜曲',url:'/6.11月的肖邦/夜曲.mp3'},
              {id:'02',name:'蓝色风暴',url:'/6.11月的肖邦/蓝色风暴.mp3'},
              {id:'03',name:'发如雪',url:'/6.11月的肖邦/发如雪.mp3'},
              {id:'04',name:'黑色毛衣',url:'/6.11月的肖邦/黑色毛衣.mp3'},
              {id:'05',name:'四面楚歌',url:'/6.11月的肖邦/四面楚歌.mp3'},
              {id:'06',name:'枫',url:'/6.11月的肖邦/枫.mp3'},
              {id:'07',name:'浪漫手机',url:'/6.11月的肖邦/浪漫手机.mp3'},
              {id:'08',name:'逆鳞',url:'/6.11月的肖邦/逆鳞.mp3'},
              {id:'09',name:'麦芽糖',url:'/6.11月的肖邦/麦芽糖.mp3'},
              {id:'10',name:'珊瑚海',url:'/6.11月的肖邦/珊瑚海.mp3'},
          ],
          imgUrl:require('../assets/album/11月的肖邦.jpg'),
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
.MusicBar{
  width: 500px;
  height: 35px;

}
.Group{
  bottom: 33px;
}
</style>
