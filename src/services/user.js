const { User } = require('../db/model/index')
const { formatUser } = require('./_format')
const doCrypto = require('../utils/cryp')

/**
 * 获取用户信息
 * @param {string} userName 
 * @param {string} password 
 */
const getUserInfo = async (userName, password) => {
  const whereOpt = { userName }
  if (password) {
    whereOpt.password = password
  }
  //search
  const result = await User.findOne({
    attributes: ['id', 'username', 'nickName', 'picture', 'city'],
    where: whereOpt
  })
  if (!result) {
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
    password: doCrypto(password),
    nickName: nickName ? nickName : userName,
    gender
  })
  const data = result.dataValues
  return data
}

module.exports = {
  getUserInfo,
  createUser
}