const Sequelize = require("sequelize");

const dbConnect = new Sequelize('rrhh', 'root', 'root', {
    dialect: 'mysql'
});

dbConnect.sync({ alter: true });

module.exports = dbConnect;