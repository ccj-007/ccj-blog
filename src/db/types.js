const Sequelize = require('sequelize')

module.exports = {
  STRING: Sequelize.STRING,
  DECIMAL: Sequelize.DECIMAL,  //用于值小的场景, 1,2,3
  TEXT: Sequelize.TEXT,
  INTEGER: Sequelize.INTEGER,
  BOOLEAN: Sequelize.BOOLEAN
}
