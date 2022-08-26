const express = require('express')
const router = express.Router()

// 引入路由事件
const userHandler = require('../router_handler/main')
// 导入表单验证中间件
const expressJoi = require('@escook/express-joi')
// 导入验证对象
const { reg_check } = require('../check/check')
// 注册
router.post('/reguser', expressJoi(reg_check), userHandler.regUser)

// 登录
router.post('/login', userHandler.login)

// 更改密码
router.post('/updatePsw', expressJoi(reg_check), userHandler.updatePsw)

module.exports = router