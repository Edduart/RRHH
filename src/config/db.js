const Sequelize = require("sequelize");

// conexion a la base de datos puerto 3306 y localhost

const sequelize = new Sequelize('rrhh', 'root', 'root', {
        dialect: 'mysql'
    });


const sync = async () =>{
    await sequelize.sync({ force: true });
}

sync();

module.exports = sequelize;