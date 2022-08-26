<template>
  <div>
    <MusicTitle :musicTitle="musicTitle" />
    <GroupOfMusic :allMusic="allMusic" :albumName="musicTitle" />
    <AlbumImg :imgUrl="imgUrl" />
    <MusicPlayer />
    <MusicWordsContainer />
  </div>
</template>

<script>
import GroupOfMusic from "../components/GroupOfMusic.vue";
import AlbumImg from "../components/AlbumImg.vue";
import MusicTitle from "../components/MusicTitle.vue";
import MusicPlayer from "../components/MusicPlayer.vue";
import MusicWordsContainer from "../components/MusicWordsContainer.vue";

export default {
  name: "TwelveNewWork",
  components: {
    GroupOfMusic,
    AlbumImg,
    MusicTitle,
    MusicPlayer,
    MusicWordsContainer,
  },
  beforeCreate() {
    document.body.setAttribute(
      "style",
      "background-image: linear-gradient(to right, #40a8c7, #3d9ebd, #3a93b3, #3789a9, #347f9f);"
    );
  },
  data() {
    return {
      musicTitle: "十二新作",
      allMusic: [
        { id: "01", name: "四季列车", url: "/12.十二新作/四季列车.mp3" },
        { id: "02", name: "手语", url: "/12.十二新作/手语.mp3" },
        { id: "03", name: "公公偏头痛", url: "/12.十二新作/公公偏头痛.mp3" },
        { id: "04", name: "明明就", url: "/12.十二新作/明明就.mp3" },
        { id: "05", name: "傻笑", url: "/12.十二新作/傻笑.mp3" },
        { id: "06", name: "比较大的大提琴", url: "/12.十二新作/比较大的大提琴.mp3", },
        { id: "07", name: "爱你没差", url: "/12.十二新作/爱你没差.mp3" },
        { id: "08", name: "红尘客栈", url: "/12.十二新作/红尘客栈.mp3" },
        { id: "09", name: "梦想启动", url: "/12.十二新作/梦想启动.mp3" },
        { id: "10", name: "大笨钟", url: "/12.十二新作/大笨钟.mp3" },
        { id: "11", name: "哪里都是你", url: "/12.十二新作/哪里都是你.mp3" },
        { id: "12", name: "乌克丽丽", url: "/12.十二新作/乌克丽丽.mp3" },
      ],
      imgUrl: require("../assets/album/十二新作.jpg"),
      len: 12,
    };
  },
};
</script>

<style snoped>
* {
  margin: 0;
  padding: 0;
}
</style>