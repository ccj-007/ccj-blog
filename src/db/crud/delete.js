const { Blog, User } = require('../model')

!(async function () {
  //删除一条博客
  const delBlog = await Blog.destroy({
    where: {
      id: 4
    }
  })

  console.log("delBlog", delBlog);
})()