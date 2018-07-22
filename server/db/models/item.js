const Sequelize = require('sequelize')
const db = require('../db')


const Item = db.define('item', {
  x: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  y: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
})

module.exports = Item;

