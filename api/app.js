const express = require('express')
const app = express()

// 识别 req.body
app.use(express.urlencoded({extended:false}))
// 在路由之前封装send函数
app.use((req, res, next) => {
    res.fail = ((err, statusbar = 1) => {
        res.send({
            statusbar,
            message: err instanceof Error ? err.message : err
        })
    })
    next()
})

const expressJwt = require('express-jwt')
const config = require('./config')
// 访问哪个路径不需要token
app.use(expressJwt({secret: config.secretKey}).unless({path: [/^\/api\//]}))


const cors = require('cors')
// 配置跨域中间件 cors
app.use(cors())

const userRouter = require('./router/user')
const personRouter = require('./router/person')
// 导入并使用用户路由模块
app.use('/api', userRouter)
app.use('/self', personRouter)

const joi = require('joi')
const { date } = require('@hapi/joi/lib/template')
const { compareSync } = require('bcryptjs')
// 捕获异常
app.use((err, req, res, next) => {
    if(err instanceof joi.ValidationError) return res.fail(err)

    if(err.name === 'UnauthorizedError') return res.fail('身份认证失败')

    res.fail(err)
})

// 启动服务器
app.listen(3108, () => {
    console.log('正在监听 3108 端口')
})