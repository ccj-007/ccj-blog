const { Blog, User } = require('./model')

!(async function () {
  //查找一条记录
  // const zhangsan = await User.findOne({
  //   where: {
  //     username: 'zhangsan'
  //   }
  // })
  // console.log('zhangsan', zhangsan.dataValues)


  // //查询特定的列
  // const zhangsan2 = await User.findOne({
  //   attributes: ['username', 'nickname'],
  //   where: {
  //     username: 'zhangsan'
  //   }
  // })
  // console.log('zhangsan2', zhangsan2.dataValues)


  //查询列表
  // const zhangsanBlogList = await Blog.findAll({
  //   where: {
  //     userid: 1
  //   },
  //   order: [
  //     ['id', 'desc']
  //   ]
  // })

  // console.log('zhangsanBlogList', zhangsanBlogList.map(blog => blog.dataValues));

  //分页
  // const blogPageList = await Blog.findAll({
  //   limit: 2, //限制查询2条
  //   offset: 0,  //跳过
  //   order: [
  //     ['id', 'desc']
  //   ]
  // })

  // //查询总数
  // const blogPageSum = await Blog.findAndCountAll({
  //   limit: 2, //限制查询2条
  //   offset: 0,  //跳过多少页，
  //   order: [
  //     ['id', 'desc']
  //   ]
  // })


  //连表查询1
  // const blogListWithUser = await Blog.findAndCountAll({
  //   order: [
  //     ['id', 'desc']
  //   ],
  //   include: [
  //     {
  //       model: User,
  //       attributes: ['username', 'nickname'],
  //       where: {
  //         username: 'zhangsan'
  //       }
  //     }
  //   ]
  // })

  // console.log("blogListWithUser",
  //   blogListWithUser.count,
  //   blogListWithUser.rows.map(blog => {
  //     const blogVal = blog.dataValues
  //     blogVal.users = blogVal.users.dataValues
  //     return blogVal
  //   })
  // );

  //相对链表查询的是blog，那么blog对user是一对多，那么要考虑map出dataValues
  //连表查询2
  const blogListWithUser = await User.findAndCountAll({
    order: [
      ['id', 'desc']
    ],
    include: [
      {
        model: Blog,
      }
    ]
  })

  console.log("blogListWithUser",
    blogListWithUser.count,
    blogListWithUser.rows.map(user => {
      const userVal = user.dataValues
      userVal.blogs = userVal.blogs.map(blog => blog.dataValues)
      return userVal
    })
  );


})()