const mysql = require('mysql')

// 创建数据库连接
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bigwork'
})


module.exports = db