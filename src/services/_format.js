/**
 * @description  格式化代码
 */
const { DEFAULT_AVATAR } = require('../conf/constant')

/**
 * 用户默认头像信息
 * @param {Object} obj 用户头像
 */
function _formatUserPicture (obj) {
  if (obj.picture == null) {
    obj.picture = DEFAULT_AVATAR
  }
  return obj
}

/**
 * 格式化用户信息
 * @param {Object[] | Object} list 用户列表或单个用户对象
 */
function formatUser (list) {
  if (list === null) return list
  //it is array
  if (list instanceof Array) return list.map(_formatUserPicture)
  //it is single object
  return _formatUserPicture(list)
}

module.exports = {
  formatUser
}