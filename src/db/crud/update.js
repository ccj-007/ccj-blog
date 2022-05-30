const { Blog, User } = require('./model')

!(async function () {
  const updateRes = await User.update({
    nickname: '张三2'
  }, {
    where: {
      username: 'zhangsan'
    }
  })

  console.log('updateRes', updateRes[0] > 0);
})()