/**
 * @description utils constroller
 */
const path = require('path')
const { uploadFileSizeFailInfo } = require("../model/ErrorInfo")
const { ErrorModel, SuccessModel } = require("../model/ResModel")
const fse = require('fs-extra')
//文件最大体积 1M
const MAX_SIZE = 1024 * 1024 * 1024
const FILE_PATH = path.join(__dirname, '..', '..', 'uploadFiles')

fse.pathExists(FILE_PATH).then(isExist => {
  if (!isExist) {
    fse.ensureDir(FILE_PATH)
  }
})
/**
 * 保存文件
 * @param {string} name 文件名 
 * @param {string} type 文件类型 
 * @param {number} size 文件体积大小 
 * @param {string} filePath 文件路径 
 */
async function saveFile ({ name, type, size, filePath }) {
  console.log({ name, type, size, filePath })
  if (size > MAX_SIZE) {
    console.log("删除了删除了");
    await fse.remove(filePath)
    return new ErrorModel(uploadFileSizeFailInfo)
  }

  //移动文件
  const fileName = Date.now() + '.' + name
  console.log("文件名----------------", filePath)

  const distFilePath = path.join(FILE_PATH, fileName)
  console.log("文件名", filePath + distFilePath)
  await fse.move(filePath, distFilePath)


  //返回名字
  return new SuccessModel({
    url: '/' + fileName
  })
}

module.exports = {
  saveFile
}