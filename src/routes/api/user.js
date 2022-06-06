/**
 * @description user router model
 */
const router = require('koa-router')()
const { isExist, register, login, logout, deleteCurUser, changeInfo, changePassword } = require('../../controller/user')
const userValidate = require('../../validator/user')
const { genValidator } = require('../../middlewares/validator')
const { loginCheck } = require('../../middlewares/loginChecks')

router.prefix('/api/user')

//用户是否存在
router.post('/isExist', async (ctx, next) => {
  const { userName } = ctx.request.body
  //controller
  ctx.body = await isExist(userName)
})

//注册
router.post('/register', genValidator(userValidate), async (ctx, next) => {
  const { userName, password, gender } = ctx.request.body
  ctx.body = await register({ userName, password, gender })
})

//登录
router.post('/login', async (ctx, next) => {
  const { userName, password } = ctx.request.body
  ctx.body = await login(ctx, userName, password)
})

//删除
router.post('/delete', loginCheck, async (ctx, next) => {
  const { userName } = ctx.request.body
  ctx.body = await deleteCurUser(userName)
})

//修改个人信息
router.patch('/changeInfo', loginCheck, genValidator(userValidate), async (ctx, next) => {
  const { nickName, city, picture } = ctx.request.body
  ctx.body = await changeInfo(ctx, { nickName, city, picture })
})

//修改用户密码
router.patch('/changePassword', loginCheck, genValidator(userValidate), async (ctx, next) => {
  const { userName } = ctx.session.userInfo
  const { password, newPassword } = ctx.request.body
  ctx.body = await changePassword({ userName, password, newPassword })
})

// 退出登录
router.post('/logout', loginCheck, async (ctx, next) => {
  ctx.body = await logout(ctx)
})


module.exports = router