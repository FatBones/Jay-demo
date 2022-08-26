<template>
  <div id="font">
    <p id="aF">{{musicTitle}}</p>
  </div>
</template>

<script>
export default {
    name:'MusicTitle',
    props:['musicTitle']
}
</script>

<style scoped>
    #font{
        width: 800px;
        height: 50px;
        margin: 0 auto;
    }
    #aF{
        font-family: "迷你简卡通";
        font-weight: bold;
        font-size: 70px;
        text-align: center;
        margin: 0 auto;
        color: #5c5c3c;
        display: block;
        cursor: default;
    }
</style>