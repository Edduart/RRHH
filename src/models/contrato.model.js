const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.js")

class Contrato extends Model {}

Contrato.init( //revisar tipos de datos
    {
        Contrato_ID: {
            type: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        cedula: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        periodo: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        cargo: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        sueldo: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        tipo: {
            type: DataTypes.CHAR,
            allowNull: false
        }
    },{
        sequelize, // instacia de sequelize => base de datos
        modelName: 'contrato', // Nombre del modelo en sequelize
        tableName: 'contrato', // Nombre directo de la tabla
        timestamps: false 
    })

module.exports = Contrato;

