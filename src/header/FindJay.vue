<template>
  <div id="findGroup" @mouseleave="hiddenPlace">
    <div id="line"></div>
    <div id="musicPlace" ref="musicPlace">
      <div class="group1" ref="group1" @click="begin1">
        <transition
          appear
          name="animate__animated animate__bounce"
          enter-active-class="animate__fadeInLeft"
          leave-active-class="animate__fadeOutLeft"
        >
          <p v-show="isShow">轨迹</p>
        </transition>
        <audio
          controls
          hidden
          loop
          ref="a1"
          src="../assets/audio/轨迹.mp3"
        ></audio>
      </div>

      <div class="group2" ref="group2" @click="begin2">
        <transition
          appear
          name="animate__animated animate__bounce"
          enter-active-class="animate__fadeInLeft"
          leave-active-class="animate__fadeOutLeft"
        >
          <p v-show="isShow">断了的弦</p>
        </transition>
        <audio
          controls
          hidden
          loop
          ref="a2"
          src="../assets/audio/断了的弦.mp3"
        ></audio>
      </div>
    </div>
    <li class="find">
      <a
        href="javascript:;"
        :style="{
          backgroundImage: `url(${require('../assets/icon/寻找周杰伦1.jpeg')})`,
        }"
        @mouseenter="showPlace"
      ></a>
    </li>
  </div>
</template>

<script>
import "animate.css";

export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    showPlace() {
      this.$refs.musicPlace.style.width = "200px";
      this.isShow = true;
    },
    hiddenPlace() {
      this.$refs.musicPlace.style.width = "80px";
      this.isShow = false;
    },
    begin1() {
      if (this.$refs.a1.paused) {
        this.$refs.a2.pause();
        this.$refs.a1.play();
      } else this.$refs.a1.pause();
    },
    begin2() {
      if (this.$refs.a2.paused) {
        this.$refs.a1.pause();
        this.$refs.a2.play();
      } else this.$refs.a2.pause();
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#findGroup {
  position: absolute;
  top: -3px;
  left: 150px;
  transform: rotate(10deg);
  animation: swing 3s linear infinite;
}

#line {
  position: absolute;
  width: 2px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.3);
}

.find {
  position: absolute;
  display: block;
  left: -40px;
  top: 100px;
  width: 80px;
  height: 80px;
  border-radius: 40px;
}
.find a {
  display: block;
  width: inherit;
  height: inherit;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  text-decoration: none;
  transition: 0.2s;
  opacity: 0.8;
}
.find a:hover {
  background: rgba(255, 255, 255, 0.3);
  opacity: 1;
}

@keyframes swing {
  50% {
    transform: rotate(-3deg);
  }
}

#musicPlace {
  position: absolute;
  left: -40px;
  top: 100px;
  border-radius: 40px;
  width: 80px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.1);
  transition: width 0.8s;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);

}
.group1 {
  font-family: "腾祥婀娜体简";
  width: 80px;
  height: 40px;
  position: absolute;
  text-align: center;
  line-height: 40px;
  left: 90px;
  top: 0px;
  cursor: pointer;
}
.group2 {
  font-family: "腾祥婀娜体简";
  width: 80px;
  height: 40px;
  text-align: center;
  border-radius: 20px;
  position: absolute;
  text-align: center;
  line-height: 40px;
  left: 90px;
  top: 40px;
  cursor: pointer;
}
</style>