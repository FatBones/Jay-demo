const express = require('express')
const router = express.Router()

const personHandler = require('../router_handler/main')

// 获取用户信息
router.get('/person', personHandler.person)

// 获取收藏歌曲
router.get('/selectSong', personHandler.selectSong)

// 添加收藏歌曲
router.post('/addSong', personHandler.addSong)

// 删除收藏歌曲
router.delete('/deleteSong', personHandler.deleteSong)

// 更改用户头像
router.post('/updateUserPic', personHandler.updateUserPic)

module.exports = router