const { Blog, User } = require('../model')

!(async function () {
  //创建用户
  const zhangsan = await User.create({
    username: 'zhangsan',
    password: '123456',
    nickname: '张三'
  })
  const zhangsanId = zhangsan.dataValues.id

  console.log('zhangsan', zhangsan.dataValues);

  const lisi = await User.create({
    username: 'lisi',
    password: '123456',
    nickname: '李四'
  })
  const lisiId = lisi.dataValues.id

  //创建博客
  const blog_lisi1 = await Blog.create({
    title: '李四的标题',
    content: '李四的内容',
    userid: lisiId
  })
  const blog_lisi2 = await Blog.create({
    title: '李四的标题222',
    content: '李四的内容222',
    userid: lisiId
  })

  const blog_zhangsan1 = await Blog.create({
    title: '张三的标题',
    content: '张三的内容',
    userid: zhangsanId
  })
  const blog_zhangsan2 = await Blog.create({
    title: '张三的标题222',
    content: '张三的内容222',
    userid: zhangsanId
  })
})()