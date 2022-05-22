const Sequelize = require('sequelize')

const conf = {
  host: 'localhost',
  dialect: 'mysql'
}

// conf.pool = {
//   max: 5,
//   min: 0,
//   idle: 10000 //如果一个连接池 10s内没有使用，就释放
// }
//连接池是一种缓解性能，防止多次连接，尤其线上用户链接

const seq = new Sequelize('ccj_blog_db', 'root', 'root', conf)

module.exports = seq
