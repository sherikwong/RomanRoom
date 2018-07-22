const User = require('./user')
const Item = require('./item')
const Memory = require('./memory')
const Room = require('./room')

Room.hasMany(Item);
Item.belongsTo(Room);

Item.hasMany(Memory);
Memory.belongsTo(Item);

Room.belongsTo(User);
User.hasMany(Room);


module.exports = {
  User,
  Item,
  Memory,
  Room
}
