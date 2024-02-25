const Sequelize = require("sequelize");

const dbConnect = new Sequelize('rrhh', 'root', 'root', {
    dialect: 'mysql'
});

/*startDb = () => {
    dbConnect.authenticate().then(() => {
        console.log('conexion a la base de datos exitosa!')
    }).catch((err) => {
        console.log('error en la coneccion a la base de datos')
    });
}*/

//startDb();

dbConnect.sync({ alter: true });

module.exports = dbConnect;