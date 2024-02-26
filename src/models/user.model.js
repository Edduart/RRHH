const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.js")

class User extends Model {}

User.init( //revisar tipos de datos
    {
        cedula: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        apellido: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        correo: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        telefono: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        fechaDeIngreso: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), // <= revisar tipo de dato
            allowNull: false
        }
    },{
        sequelize, // instacia de sequelize => base de datos
        modelName: 'personal', // Nombre del modelo en sequelize
        tableName: 'personal', // Nombre directo de la tabla
        timestamps: false 
    })

module.exports = User;

