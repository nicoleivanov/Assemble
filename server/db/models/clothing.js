const Sequelize = require ('sequelize')
const db = require('../db')

const Clothing = db.define('clothing', {
  category: {
    type: Sequelize.ENUM,
    values: ['top', 'bottom', 'full body']
  },
  color: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  setting: {
    type: Sequelize.ARRAY(Sequelize.STRING) // casual, work, going out
  },
  weather: {
    type: Sequelize.ARRAY(Sequelize.STRING) // cold, warm, hot
  },
  imageUrl: {
    type: Sequelize.TEXT
  }
})

module.exports = Clothing