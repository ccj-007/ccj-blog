const Sequelize = require('sequelize')
const seq = require('./seq')

//创建User模型
const User = seq.define('users', {
  //id会自动创建
  username: {
    type: Sequelize.STRING, //VARCHAR(255)
    allowNUll: false
  },
  password: {
    type: Sequelize.STRING,
    allowNUll: false
  },
  nickname: {
    type: Sequelize.STRING,
    comment: '昵称'
  }
})

//创建Blog模型
const Blog = seq.define('blogs', {
  //id会自动创建
  title: {
    type: Sequelize.STRING,
    allowNUll: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNUll: false
  },
  userid: {
    type: Sequelize.INTEGER,
    allowNUll: false
  }
})

//外键关联,多个blog连接user
Blog.belongsTo(User, {
  //创建外键Blog.userid => User.id
  foreignKey: 'userid'
})
User.hasMany(Blog, {
  //创建外键Blog.userid => User.id
  foreignKey: 'userid'
})

module.exports = {
  User,
  Blog
}