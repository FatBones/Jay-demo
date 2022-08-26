<template>
  <div id="out">
    <nav class="menu">
      <input  class="menu-toggler" id="menu-toggler" type="checkbox">
      <label for="menu-toggler"></label>
      <ul>
        <MusicAblum v-for="res in allResouce" :key="res.id" :res="res"/>
        <FindJay/>
      </ul>
    </nav>
  </div>
 
</template>

<script>
import MusicAblum from '../components/MusicAblum.vue';
import FindJay from '../header/FindJay.vue';
export default {
  name: 'HomePage',
  components: {
      MusicAblum, FindJay
  },
  data(){
      return {
        allResouce:[
            {id:'01',AblumPath:'/jay',url:require('../assets/icon/Jay1.jpeg')},
            {id:'02',AblumPath:'/fantasy',url:require('../assets/icon/范特西1.jpg')},
            {id:'03',AblumPath:'/badukongjian',url:require('../assets/icon/八度空间1.jpg')},
            {id:'04',AblumPath:'/yehuimei',url:require('../assets/icon/叶惠美1.jpg')},
            {id:'05',AblumPath:'/qilixiang',url:require('../assets/icon/七里香1.jpg')},
            {id:'06',AblumPath:'/xiaobang',url:require('../assets/icon/11月的肖邦1.jpg')},
            {id:'07',AblumPath:'/stillfantasy',url:require('../assets/icon/依然范特西1.jpg')},
            {id:'08',AblumPath:'/ontherun',url:require('../assets/icon/我很忙1.jpg')},
            {id:'09',AblumPath:'/capricornablum',url:require('../assets/icon/魔杰座1.jpg')},
            {id:'10',AblumPath:'/crossage',url:require('../assets/icon/跨时代1.jpg')},
            {id:'11',AblumPath:'/wowablum',url:require('../assets/icon/惊叹号1.jpg')},
            {id:'12',AblumPath:'/TwelveNewWork',url:require('../assets/icon/十二新作1.jpg')},
            {id:'13',AblumPath:'/NotBad',url:require('../assets/icon/哎哟，不错哦1.jpg')},
            {id:'14',AblumPath:'/bedstory',url:require('../assets/icon/周杰伦的床边故事1.jpg')},
            {id:'15',AblumPath:'/masterpiece',url:require('../assets/icon/最伟大的作品.png')}
        ],
      }
  },
  beforeCreate(){
      document.body.setAttribute('style', 'background-image: linear-gradient(to right, #0e979e, #2f9f9d, #45a69b, #59ad9a, #6cb499);' );

    },
  
}
</script>

<style>

*{
    margin: 0;
    padding: 0;
}

#back {
  width: 0.1px;
  height: 0.1px;
}

.menu-toggler {
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 40px;
    height: 40px;
    z-index: 2;
    opacity: 0;
    cursor: pointer;
}

.menu-toggler:hover + label, .menu-toggler:hover + label:before,
.menu-toggler:hover + label:after {
    background: white;
}

.menu-toggler:checked + label {
    background: transparent;
}

.menu-toggler:checked + label:before, .menu-toggler:checked + label:after {
    top: 0;
    width: 40px;
    transform-origin: 50% 50%;
}

.menu-toggler:checked + label:before {
    transform: rotate(45deg);
}

.menu-toggler:checked + label:after {
    transform: rotate(-45deg);
}

.menu-toggler:checked ~ ul .menu-item {
    opacity: 1;
}

.menu-toggler:checked ~ ul .menu-item:nth-child(1) {
    transform: rotate(0deg) translateX(-150px);
}
.menu-item:nth-child(1) a {
    transform: rotate(0deg);
}

.menu-toggler:checked ~ ul .menu-item:nth-child(2) {
    transform: rotate(60deg) translateX(-150px);
}
.menu-item:nth-child(2) a {
    transform: rotate(-60deg);
}

.menu-toggler:checked ~ ul .menu-item:nth-child(3) {
    transform: rotate(120deg) translateX(-150px);
}
.menu-item:nth-child(3) a {
    transform: rotate(-120deg);
}

.menu-toggler:checked ~ ul .menu-item:nth-child(4) {
    transform: rotate(180deg) translateX(-150px);
}
.menu-item:nth-child(4) a {
    transform: rotate(-180deg);
}

.menu-toggler:checked ~ ul .menu-item:nth-child(5) {
    transform: rotate(240deg) translateX(-150px);
}
.menu-item:nth-child(5) a {
    transform: rotate(-240deg);
}

.menu-toggler:checked ~ ul .menu-item:nth-child(6) {
    transform: rotate(300deg) translateX(-150px);
}
.menu-item:nth-child(6) a {
    transform: rotate(-300deg);
}

.menu-toggler:checked ~ ul .menu-item:nth-child(7) {
    transform: rotate(50deg) translateX(-315px);
}
.menu-item:nth-child(7) a {
    transform: rotate(-50deg);
}

.menu-toggler:checked ~ ul .menu-item:nth-child(8) {
    transform: rotate(90deg) translateX(-315px);
}
.menu-item:nth-child(8) a {
    transform: rotate(-90deg);
}

.menu-toggler:checked ~ ul .menu-item:nth-child(9) {
    transform: rotate(130deg) translateX(-315px);
}
.menu-item:nth-child(9) a {
    transform: rotate(-130deg);
}

.menu-toggler:checked ~ ul .menu-item:nth-child(10) {
    transform: rotate(170deg) translateX(-315px);
}
.menu-item:nth-child(10) a {
    transform: rotate(-170deg);
}

.menu-toggler:checked ~ ul .menu-item:nth-child(11) {
    transform: rotate(210deg) translateX(-315px);
}
.menu-item:nth-child(11) a {
    transform: rotate(-210deg);
}

.menu-toggler:checked ~ ul .menu-item:nth-child(12) {
    transform: rotate(250deg) translateX(-315px);
}
.menu-item:nth-child(12) a {
    transform: rotate(-250deg);
}

.menu-toggler:checked ~ ul .menu-item:nth-child(13) {
    transform: rotate(290deg) translateX(-315px);
}
.menu-item:nth-child(13) a {
    transform: rotate(-290deg);
}

.menu-toggler:checked ~ ul .menu-item:nth-child(14) {
    transform: rotate(330deg) translateX(-315px);
}
.menu-item:nth-child(14) a {
    transform: rotate(-330deg);
}

.menu-toggler:checked ~ ul .menu-item:nth-child(15) {
    transform: rotate(370deg) translateX(-315px);
}
.menu-item:nth-child(15) a {
    transform: rotate(-370deg);
}

.menu-toggler:checked ~ ul .menu-item a {
    pointer-events: auto;
}


.menu-toggler + label {
    width: 40px;
    height: 5px;
    display: block;
    z-index: 1;
    border-radius: 2.5px;
    background: rgba(255, 255, 255, 0.7);
    transition: transform 0.5s, top 0.5s;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
}

.menu-toggler + label:before, .menu-toggler + label:after {
    width: 40px;
    height: 5px;
    display: block;
    z-index: 1;
    border-radius: 2.5px;
    background: rgba(255, 255, 255, 0.7);
    transition: transform 0.5s, top 0.5s;
    content: "";
    position: absolute;
    left: 0;
}

.menu-toggler + label:before {
    top: 10px;
}

.menu-toggler + label:after {
    top: -10px;
}



.menu-item:nth-child(1), .menu-item:nth-child(2), .menu-item:nth-child(3)
, .menu-item:nth-child(4), .menu-item:nth-child(5), .menu-item:nth-child(6){
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 80px;
    height: 80px;
    opacity: 0;
    transition: 0.5s;
    border-radius: 40px;
}

.menu-item:nth-child(7), .menu-item:nth-child(8), .menu-item:nth-child(9)
, .menu-item:nth-child(10), .menu-item:nth-child(11), .menu-item:nth-child(12)
, .menu-item:nth-child(13), .menu-item:nth-child(14), .menu-item:nth-child(15){
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 100px;
    height: 100px;
    opacity: 0;
    transition: 0.5s;
    border-radius: 40px;
}

.menu-item a {
    display: block;
    width: inherit;
    height: inherit;
    line-height: 80px;
    color: rgba(255, 255, 255, 0.7);
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    text-align: center;
    text-decoration: none;
    font-size: 40px;
    pointer-events: none;
    transition: 0.2s;
    opacity: 0.8;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
}

.menu-item a:hover {
    
    color: white;
    background: rgba(255, 255, 255, 0.3);
    opacity: 1;
}





</style>
