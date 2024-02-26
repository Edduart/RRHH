const Sequelize = require("sequelize");

// conexion a la base de datos puerto 3306 y localhost

const dbConnect = new Sequelize('rrhh', 'root', 'root', {
    dialect: 'mysql'
});

dbConnect.sync({ alter: true });

module.exports = dbConnect;