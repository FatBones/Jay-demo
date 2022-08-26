<template>
    <div id="bottom_place">
        <input ref="username" id="userId" type="text" >
        <input ref="password" id="passWord" type="password" @keydown.enter="login">
        <input id="loginBtn" type="button" value="登录" @click="login">
        <input id="register" type="button" value="注册" @click="reguser">
    </div>
</template>

<script>
import { Message } from 'element-ui';
import {login, reguser} from '../api/index';
export default {
    name:'LoginUp',
    data(){
        return {
            bg: require('../assets/img/背景.png')
        }
    },
    beforeMount(){
      document.body.setAttribute('style', `background-image: url('${this.bg}');`);

    },
    methods:{
        async login(){
            let params = new URLSearchParams()
            params.append('username',this.$refs.username.value)
            params.append('password',this.$refs.password.value)
            const result = await login(params)
            if(result.message === '登录成功'){
                // 本地保存 token
                window.localStorage.setItem('token',result.token)
                this.$router.push('/personalpage')
            }
            else Message.warning(result.message)
        },
        async reguser(){
            let params = new URLSearchParams()
            params.append('username',this.$refs.username.value)
            params.append('password',this.$refs.password.value)
            const result = await reguser(params)
            if(result.message === '注册成功')Message.success('注册成功')
            else Message.warning('用户以存在')
        }
    }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    
    #bottom_place{
        margin: 150px auto;
        width: 400px;
        height: 400px;
        border-radius: 40px;
        background-color: rgba(0, 0, 0, 0.1);
        box-shadow: 0 0 10px rgba(0, 0, 0, 1);
    }
    #userId{
        border: none;
        background-color: rgba(255, 255, 255, 0);
        box-shadow: none;
        outline: none;
        border-bottom: 2px solid rgb(0, 0, 0);
        width: 300px;
        height: 30px;
        position: relative;
        left: 12.5%;
        top: 15%;
        font-size: 18px;
        text-align: center;
        color: rgb(255, 255, 255);
        font-family: '腾祥爱情体简';
    }
    #passWord{
        border: none;
        background-color: rgba(255, 255, 255, 0);
        box-shadow: none;
        outline: none;
        border-bottom: 2px solid rgb(0, 0, 0);

        width: 300px;
        height: 30px;
        position: relative;
        left: 12.5%;
        top: 30%;
        font-size: 18px;
        text-align: center;
        color: rgb(255, 255, 255);
    }
    #loginBtn{
        background-color: rgb(21, 68, 76);
        color: rgb(47, 132, 95);
        width: 50px;
        height: 30px;
        border-radius: 5px;
        border: none;
        position: relative;
        right: 50%;
        top: 50%;
        font-family: '腾祥爱情体简';
        font-size: 16px;
        cursor: pointer;
    }
    #loginBtn:hover{
        background-color: rgb(42, 60, 70);
        color: rgb(130, 134, 130);
    }
    #register{
        background-color: rgb(21, 68, 76);
        color: rgb(163, 155, 155);
        width: 50px;
        height: 30px;
        border-radius: 5px;
        border: none;
        position: relative;
        right: 25%;
        top: 50%;
        font-family: '腾祥爱情体简';
        font-size: 16px;
        cursor: pointer;
    }
</style>