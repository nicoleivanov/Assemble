const Sequelize = require ('sequelize')
const db = require('./_db')

const Clothing = db.define('clothing', {
  category: {
    type: Sequelize.ENUM,
    values: ['top', 'bottom', 'full body']
  },
  color: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING
  }
})

module.exports = Clothing