const { Sequelize } = require("sequelize");

class db {
    constructor() {
        this.db = new Sequelize('rrhh', 'root', 'root', {
            dialect: 'mysql'
        });;
    }

    startDb = () => {
        this.db.authenticate().then(() => {
            console.log('conexion a la base de datos exitosa!')
        }).catch((err) => {
            console.log('error en la coneccion a la base de datos')
        });
    }
}

module.exports = db;