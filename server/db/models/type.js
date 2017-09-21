const Sequelize = require ('sequelize')
const db = require('./_db')

const Type = db.define('type', {
  name: { // t-shirt, sweater, jeans, dress, etc.
    type: Sequelize.STRING
  }
})

module.exports = Type