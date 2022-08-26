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
      name: 'YeAblum',
      
      components: {
          GroupOfMusic, AlbumImg, MusicTitle, MusicPlayer, MusicWordsContainer
      },
      beforeCreate(){
        document.body.setAttribute('style', 'background:linear-gradient(to right, rgba(105,132,79,0.85), rgba(25,99,28,0.65)');

      },
      data(){
          return {
            musicTitle:'叶惠美',
            allMusic:[
                {id:'01',name:'以父之名',url:'/4.叶惠美/以父之名.mp3'},
                {id:'02',name:'懦夫',url:'/4.叶惠美/懦夫.mp3'},
                {id:'03',name:'晴天',url:'/4.叶惠美/晴天.mp3'},
                {id:'04',name:'三年二班',url:'/4.叶惠美/三年二班.mp3'},
                {id:'05',name:'东风破',url:'/4.叶惠美/东风破.mp3'},
                {id:'06',name:'你听得到',url:'/4.叶惠美/你听得到.mp3'},
                {id:'07',name:'同一种调调',url:'/4.叶惠美/同一种调调.mp3'},
                {id:'08',name:'她的睫毛',url:'/4.叶惠美/她的睫毛.mp3'},
                {id:'09',name:'爱情悬崖',url:'/4.叶惠美/爱情悬崖.mp3'},
                {id:'10',name:'梯田',url:'/4.叶惠美/梯田.mp3'},
                {id:'11',name:'双刀',url:'/4.叶惠美/双刀.mp3'},
            ],
            imgUrl:require('../assets/album/叶惠美.jpg'),
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
