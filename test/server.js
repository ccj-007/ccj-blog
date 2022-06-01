/**
 * 测试模块编译入口
 */

const request = require('supertest')
const server = require('../src/app').callback()

module.exports = request(server)
