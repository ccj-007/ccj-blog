const { isProd } = require('../utils/env')

// 配置
let MYSQL_CONF
let REDIS_CONF

// mysql
MYSQL_CONF = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: '3306',
  database: 'ccj_blog_db'
}

// redis
REDIS_CONF = {
  port: 6379,
  host: '127.0.0.1'
}

if (isProd) {
  // 线上的mysql
  MYSQL_CONF = {
    host: '124.223.162.201',
    user: 'chencaijun',
    password: '8CaKC5a4eh7sdwNh',
    port: '3306',
    database: 'chencaijun'
  }

  // 线上的redis
  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
  }
}

module.exports = {
  MYSQL_CONF,
  REDIS_CONF
}