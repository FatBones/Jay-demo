const db = require('../db/index')
// 加密
const bcrypt = require('bcryptjs')
// 生成 token
const jwt = require('jsonwebtoken')
const config = require('../config')
const expressJoi = require('@escook/express-joi')
const { result } = require('@hapi/joi/lib/base')

exports.regUser = (req, res) => {
    const userInfo = req.body
    // 查询用户
    const select_sql = 'select * from ev_users where username = ?'
    db.query(select_sql, userInfo.username, (err, result) => {
        if(err) return res.fail(err)
        // 判重
        if(result.length > 0) return res.fail('用户名被占用，请更换')
        // 对密码加密
        userInfo.password = bcrypt.hashSync(userInfo.password, 10)
        // 插入新用户
        const insert_sql = 'insert into ev_users set ?'
        db.query(insert_sql, {username:userInfo.username, password: userInfo.password}, (err, result) => {
            if(err) return res.fail(err)
            
            if(result.affectedRows !== 1) return res.fail('注册失败！')

            res.send({statusbar: 0, message: '注册成功'})
        })
    })
}

exports.login = (req, res) => {
    const userInfo = req.body
    // 查询用户
    const select_sql = 'select * from ev_users where username = ?'
    db.query(select_sql, userInfo.username, (err, result) => {
        if(err) return res.fail(err)

        if(result.length !== 1) return res.fail('没有此用户')
        
        const isRight = bcrypt.compareSync(userInfo.password, result[0].password)
        if(!isRight)return res.fail('密码错误')
        // token包含的信息
        const user = { ...result[0], password:'', user_pic:''}
        // 生成 token                       密钥                过期时间
        const tokenStr = jwt.sign(user, config.secretKey, {expiresIn: config.expiresIn})

        res.send({statusbar: 0, message: '登录成功', token: 'Bearer ' + tokenStr})
        
    })
}

exports.updatePsw = (req, res) => {
    const userInfo = req.body
    const select_sql = 'select password from ev_users where username = ?'
    db.query(select_sql, userInfo.username, (err, result) => {
        if(err) return res.fail(err)

        if(result.length !== 1) return res.fail('没有此用户')

        const update_sql = 'update ev_users set password = ? where username = ?'
        db.query(update_sql, [userInfo.password, userInfo.username], (err, result) => {
            if(err) return res.fail(err)

            if(result.affectedRows !== 1) return res.fail('没有此用户')

            res.send({
                statusbar: 0,
                message: '密码修改成功',
            })
        })
    })
}

exports.person = (req, res) => {
    const select_sql = 'select id, username, nickname, user_pic from ev_users where id = ?'
    // express-jwt 中间件会自动解析 token，将 id 挂载于 req 的 user 上
    db.query(select_sql, req.user.id, (err, result) => {
        if(err) return res.fail(err)

        if(result.length !== 1) return res.fail('获取用户信息失败！')
        
        res.send({
            statusbar: 0,
            message: '成功',
            data: result[0]
        })
    })
}

exports.selectSong = (req, res) => {
    const select_sql = 'select * from personal_songs where username = ?'
    db.query(select_sql, req.user.username, (err, result) => {
        if(err) return res.fail(err)

        res.send({
            statusbar: 0,
            message: '成功',
            data: result
        })
    })
}

exports.addSong = (req, res) => {
    let info = req.body
    const select_sql = 'select username, name from personal_songs where username = ? and name = ?'
    db.query(select_sql, [req.user.username, info.name], (err, result) => {
        if(err) return res.fail(err)
        // 判断是否已有此歌
        if(result.length === 1) return res.fail('添加失败')

        const insert_sql = 'insert into personal_songs set ?'
        db.query(insert_sql, {username:req.user.username, name:info.name, songSrc:info.songSrc, albumName:info.albumName}, (err, result) => {
            if(err) return res.fail(err)

            if(result.affectedRows !== 1) return res.fail('添加失败')

            res.send({
                statusbar: 0,
                message: '添加成功'
            })
        })
    })
    
}

exports.deleteSong = (req, res) => {
    let info = req.body
    const delete_sql = 'delete from personal_songs where username = ? and name = ?'
    db.query(delete_sql, [req.user.username, info.name], (err, result) => {
        if(err) return res.fail(err)

        if(result.affectedRows !== 1) return res.fail('删除失败')

        res.send({
            statusbar: 0,
            message: '删除成功'
        })
    })
}

exports.updateUserPic = (req, res) => {
    let info = req.body
    const updatePc_sql = 'update ev_users set user_pic = ? where username = ? '
    db.query(updatePc_sql, [info.userPic, req.user.username], (err, result) => {
        if(err) return res.fail(err)

        if(result.affectedRows !== 1) return res.fail('更改失败')
        
        res.send({
            statusbar: 0,
            message: '更改成功'
        })
    })
}