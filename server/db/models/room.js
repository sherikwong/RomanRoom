const Sequelize = require('sequelize');
const db = require('../db')

const Room = db.define('room', {
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true
  }
})

module.exports = Room;
