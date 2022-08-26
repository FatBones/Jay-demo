<template>
  <div>
    <MusicTitle :musicTitle="newMusicTitle"/>
    <GroupOfMusic :allMusic="newAllMusic" :albumName="newMusicTitle"/>
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
      props:['color', 'musiTitle', 'allMusic', 'imgUrl', 'len'],
      components: {
          GroupOfMusic, AlbumImg, MusicTitle, MusicPlayer, MusicWordsContainer
      },
      data(){
        return {
          newColor: this.color,
          newMusicTitle: this.musiTitle,
          newAllMusic: this.allMusic,
          newLen: this.len
        }
      },
      beforeMount(){
        document.body.setAttribute('style', `background:${this.newColor}`);
      },
      
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
