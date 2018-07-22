const Sequelize = require('sequelize')
const db = require('../db')


const Memory = db.define('memory', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
  },
  image: {
    type: Sequelize.STRING
  }

})

module.exports = Memory;

