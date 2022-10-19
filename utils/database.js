const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('logindb', 'root', 'password', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
