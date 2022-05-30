/**
 * @description  user constroller
 */
const { getUserInfo, createUser } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { registerUserNameNotExistInfo, registerUserNameExistInfo, registerFailInfo, loginFailInfo } = require('../model/ErrorInfo')
const doCrypto = require('../utils/cryp')

/**
 * 用户是否存在
 * @param {string} userName 用户名
 */
async function isExist (userName) {
  const userInfo = await getUserInfo(userName)
  if (userInfo) {
    return new SuccessModel(userInfo)
  } else {
    return new ErrorModel(registerUserNameNotExistInfo)
  }
}

/**
 * 注册
 * @param {string} userName 用户名
 * @param {string} password 密码
 * @param {number} gender 性别   0 男 | 1 女 | 3 保密  
 */
async function register ({ userName, password, gender }) {
  const userInfo = await getUserInfo(userName)
  if (userInfo) {
    return new ErrorModel(registerUserNameExistInfo)
  }
  try {
    await createUser({
      userName,
      password,
      gender
    })
    return new SuccessModel()
  } catch (error) {
    return new ErrorModel(registerFailInfo)
  }
}

/**
 * 登录
 * @param {string} ctx 
 * @param {string} userName 用户名
 * @param {string} password 密码
 */
async function login (ctx, userName, password) {
  const userInfo = await getUserInfo(userName, doCrypto(password))
  if (!userInfo) {
    return new ErrorModel(loginFailInfo)
  }
  console.log("session-------------", ctx.session);
  if (ctx.session.userInfo == null) {
    ctx.session.userInfo = userInfo
  }
  return new SuccessModel()
}

module.exports = {
  isExist,
  register,
  login
}