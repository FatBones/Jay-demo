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
  name: "JayAblum",
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
      "background:linear-gradient(to right, rgba(210,160,138,0.85), rgba(238,231,165,0.6)"
    );
  },
  data() {
    return {
      musicTitle: "Jay",
      allMusic: [
        { id: "01", name: "可爱女人", url: "/1.Jay/可爱女人.mp3" },
        { id: "02", name: "完美主义", url: "/1.Jay/完美主义.mp3" },
        { id: "03", name: "星晴", url: "/1.Jay/星晴.mp3" },
        { id: "04", name: "娘子", url: "/1.Jay/娘子.mp3" },
        { id: "05", name: "斗牛", url: "/1.Jay/斗牛.mp3" },
        { id: "06", name: "黑色幽默", url: "/1.Jay/黑色幽默.mp3" },
        { id: "07", name: "伊斯坦堡", url: "/1.Jay/伊斯坦堡.mp3" },
        { id: "08", name: "印第安老斑鸠", url: "/1.Jay/印第安老斑鸠.mp3" },
        { id: "09", name: "龙卷风", url: "/1.Jay/龙卷风.mp3" },
        { id: "10", name: "反方向的钟", url: "/1.Jay/反方向的钟.mp3" },
      ],
      imgUrl: require("../assets/album/Jay.jpg"),
      len: "10",
    };
  },
  methods: {},
};
</script>

<style snoped>
* {
  margin: 0;
  padding: 0;
}
</style>
