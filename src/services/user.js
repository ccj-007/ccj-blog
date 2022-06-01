const { User } = require('../db/model/index')
const { formatUser } = require('./_format')
const doCrypto = require('../utils/cryp')

/**
 * 获取用户信息
 * @param {string} userName 
 * @param {string} password 
 */
async function getUserInfo (userName, password) {
  const whereOpt = { userName }
  if (password) {
    Object.assign(whereOpt, { password })
  }

  //search
  const result = await User.findOne({
    attributes: ['id', 'userName', 'nickName', 'picture', 'city'],
    where: whereOpt
  })

  if (result == null) {
    return result
  }
  //格式化
  const formatRes = formatUser(result.dataValues)
  return formatRes
}

/**
 * 创建用户
 * @param {string} userName 用户名
 * @param {string} password 密码
 * @param {number} gender 性别
 * @param {string} nickName 昵称
 */
async function createUser ({ userName, password, gender = 3, nickName }) {
  const result = await User.create({
    userName,
    password,
    nickName: nickName ? nickName : userName,
    gender
  })
  const data = result.dataValues
  return data
}

/**
 * 删除用户
 * @param {string} userName 用户名
 */
async function deleteUser (userName) {
  const result = await User.destroy({
    where: {
      userName
    }
  })
  //删除的行数
  return result > 0
}

module.exports = {
  getUserInfo,
  createUser,
  deleteUser
}