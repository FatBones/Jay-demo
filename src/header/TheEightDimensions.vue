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
    name: 'TheEightDimensions',
    components: {
        GroupOfMusic, AlbumImg, MusicTitle, MusicPlayer, MusicWordsContainer
    },
    beforeCreate(){
      document.body.setAttribute('style', 'background-image: linear-gradient(to right, #e79f4b, #e5a253, #e4a45b, #e2a762, #e0a96a);');

    },
    data(){
        return {
          musicTitle:'八度空间',
          allMusic:[
              {id:'01',name:'半兽人',url:'/3.八度空间/半兽人.mp3'},
              {id:'02',name:'半岛铁盒',url:'/3.八度空间/半岛铁盒.mp3'},
              {id:'03',name:'暗号',url:'/3.八度空间/暗号.mp3'},
              {id:'04',name:'龙拳',url:'/3.八度空间/龙拳.mp3'},
              {id:'05',name:'火车叨位去',url:'/3.八度空间/火车叨位去.mp3'},
              {id:'06',name:'分裂',url:'/3.八度空间/分裂.mp3'},
              {id:'07',name:'爷爷泡的茶',url:'/3.八度空间/爷爷泡的茶.mp3'},
              {id:'08',name:'回到过去',url:'/3.八度空间/回到过去.mp3'},
              {id:'09',name:'米兰的小铁匠',url:'/3.八度空间/米兰的小铁匠.mp3'},
              {id:'10',name:'最后的战役',url:'/3.八度空间/最后的战役.mp3'},
          ],
          imgUrl:require('../assets/album/八度空间.jpg'),
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
