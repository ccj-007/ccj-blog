const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    msg: '你好',
    blogList: [{
      title: '11111111',
    }, {
      title: '222222222',
    }, {
      title: '33333333',
    }, {
      title: '44444444',
    }]
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/profile/:username', async (ctx, next) => {
  let { username } = ctx.params
  ctx.body = {
    title: 'koa2 json',
    username
  }
})

router.post('/login', async (ctx, next) => {
  let { username, password } = ctx.request.body
  ctx.body = {
    username,
    password
  }
})
module.exports = router
