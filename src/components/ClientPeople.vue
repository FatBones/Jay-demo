<template>
  <div>
    <div class="UsersContainer" @mouseenter="ShowUsersPic" @mouseleave="HiddenUsersPic">
      <a v-show="isShow"><img class="UsersPic"  ref="UsersPic" :src="src" @click="login"></a>
      <div class="divide" ref="divide" v-show="isShow" slot="reference">
        <img ref='topPacker' class='topPacker' v-if='ShowOrHidden' src="../assets/img/设置.png" alt="" @click="passwordUpdate">
        <img ref="bottomPacker" class="bottomPacker" v-if='ShowOrHidden' src="../assets/img/注销.png" alt="" @click="logOut">
        <!-- <div class="operationBox" v-if="ShowOrHidden">
          <p @click="passwordUpdate">修改</p>
        </div> -->
      </div>
        
    </div>

  </div>
</template>

<script>
import { Message } from 'element-ui';
import {updatePsw, person} from '../api/index';
export default {
    name:'ClientPeople',
    data(){
      return {
        src: require("../assets/img/登录.png"),
        isShow: false,
        ShowOrHidden: false
      }
    },
    beforeUpdate(){
      if(window.localStorage.token !== undefined){
        this.getPic()
      }
    },
    methods:{
      async getPic(){
        let result = await person()
        this.src = result.data.user_pic
      },
      ShowUsersPic(){
        setTimeout(() => {
          this.$refs.UsersPic.style.display = "inline";
          this.$refs.topPacker.style.display = "inline";
          this.$refs.bottomPacker.style.display = "inline";
          this.$refs.divide.style.display = "inline";
        }, 300);
        this.isShow = true;
        this.ShowOrHidden = true;

      },
      
      HiddenUsersPic(){
        this.$refs.UsersPic.style.display = "none";
        this.$refs.topPacker.style.display = "none";
        this.$refs.bottomPacker.style.display = "none";
        this.$refs.divide.style.display = "none";
        this.isShow = false;
        this.ShowOrHidden = false;

      },
      // 登录
      login(){
        if(window.localStorage.token == undefined) this.$router.push('/loginup')
        else this.$router.push('/personalpage')
      },
      // 注销
      logOut(){
        if(window.localStorage.token !== undefined){
          window.localStorage.removeItem('token')
          this.$router.push('/loginup')
          Message.success({
            message: '注销成功',
            center: true
          })
          this.src = require('../assets/img/登录.png')
        }else 
          Message.warning({
            message: '未登录',
            center: true
          })
      },
      // 修改密码
      async passwordUpdate(){
        if(window.localStorage.token === undefined)
          return Message.warning({
            message: '请登录',
            center: true
          })
        let params = new URLSearchParams()
        // params.append('username', username)
        // params.append('password', password)
        let result = await updatePsw(params)
        if(result.statusBar === 0)
          Message.success({
            message: result.message,
            center: true
          })
        else Message.fail({
          message: result.message,
          center: true
        })
      }
    }
}
</script>

<style snoped>
  .UsersContainer{
    width: 5px;
    height: 80px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: rgb(255, 255, 255, 0.1);
    position: absolute;
    bottom: 150px;
    transition: width 0.5s;
  }
  .UsersContainer:hover{
    width: 120px;
  }
  .UsersPic{
    width: 70;
    height: 70px;
    border-radius: 35px;
    overflow: hidden;
    display: none;
    position: relative;
    top: 5px;
    left: 5px;
    opacity: 0.7;
    border: 2px solid rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
  .UsersPic:hover{
    opacity: 1;
  }
  .divide{
    width: 40px;
    height: 80px;
    border-left: rgba(0, 0, 0, 0.8) solid 1px;
    position: absolute;
    left: 85px;
    top: 0%;
    display: none;
  }
  .topPacker{
    position: relative;
    left: 5px;
    top: 15%;
    width: 25px;
    height: 25px;
    display: none;
    cursor: pointer;
  }
  .bottomPacker{
    position: relative;
    left: 7px;
    top: 20%;
    width: 25px;
    height: 25px;
    cursor: pointer;
    display: none;
  }
  .personalOperate{
    height: 50px;
  }
   
   
</style>