import VueRouter from "vue-router";

import HomePage from "../HomePage/HomePage"
import JayAblum from "../header/JayAblum"
import FantasyAblum from "../header/FantasyAblum"
import TheEightDimensions from "../header/TheEightDimensions"
import YeAblum from "../header/YeAblum"
import QiLiXiang from "../header/QiLiXiang"
import XiaoBangAblum from "../header/XiaoBangAblum"
import StillFantasy from "../header/StillFantasy"
import OnTheRun from "../header/OnTheRun"
import CapricornAblum from "../header/CapricornAblum"
import CrossAge from "../header/CrossAge"
import WowAblum from "../header/WowAblum"
import TwelveNewWork from "../header/TwelveNewWork"
import NotBad from "../header/NotBad"
import BedStory from "../header/BedStory"
import MasterPiece from "../header/MasterPiece"
import LoginUp from '../components/LoginUp.vue'
import PersonalPage from '../PersonalPage/PersonalPage.vue'
import { Message } from "element-ui";


export default new VueRouter({
    mode:'hash',
    routes:[
        {
            name:'Home',
            path:'/home',
            component:HomePage,
            // redirect:'/home'
        },
        {
            name:'Jay',
            path:'/jay',
            component:JayAblum
        },
        {
            name:'FantasyAblum',
            path:'/fantasy',
            component:FantasyAblum
        },
        {
            name:'TheEightDimensions',
            path:'/badukongjian',
            component:TheEightDimensions
        },
        {
            name:'YeHuiMei',
            path:'/yehuimei',
            component:YeAblum
        },
        {
            name:'QiLiXiang',
            path:'/qilixiang',
            component:QiLiXiang
        },
        {
            name:'XiaoBang',
            path:'/xiaobang',
            component:XiaoBangAblum
        },
        {
            name:'StillFantasy',
            path:'/stillfantasy',
            component:StillFantasy
        },
        {
            name:'OnTheRun',
            path:'/ontherun',
            component:OnTheRun
        },
        {
            name:'CapricornAblum',
            path:'/capricornablum',
            component:CapricornAblum
        },
        {
            name:'CrossAge',
            path:'/crossage',
            component:CrossAge
        },
        {
            name:'WowAblum',
            path:'/wowablum',
            component:WowAblum
        },
        {
            name:'TwelveNewWork',
            path:'/twelvenewwork',
            component:TwelveNewWork
        },
        {
            name:'NotBad',
            path:'/notbad',
            component:NotBad
        },
        {
            name:'BedStory',
            path:'/bedstory',
            component:BedStory
        },
        {
            name:'MasterPiece',
            path:'/masterpiece',
            component:MasterPiece
        },
        {
            name:'LoginUp',
            path:'/loginup',
            component:LoginUp
        },
        {
            name:'PersonalPage',
            path:'/personalpage',
            component:PersonalPage,
            beforeEnter: (to, from, next) => {
                if(window.localStorage.token != undefined) next()
                else {
                    Message.warning({
                        message: '请登录',
                        center: true
                    })
                    next({path: '/loginup'})
                }
            }
        }
    ],
    
})
