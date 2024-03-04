const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.js")


class Contrato extends Model {}

Contrato.init( //revisar tipos de datos
    {
        contrato_ID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        cedula: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tipo: {
            type: DataTypes.CHAR,
            allowNull: false
        }
    },{
        sequelize, // instacia de sequelize => base de datos
        modelName: 'Contrato', // Nombre del modelo en sequelize
        tableName: 'contrato', // Nombre directo de la tabla
        timestamps: false 
    }
)

const relation = async() => {
    const {Contrato, User, Nomina} = await sequelize.models;
    Contrato.belongsTo(User, {
        targetKey: 'cedula',
        foreignKey: 'cedula'
    });

    Contrato.hasOne(Nomina, {
        foreignKey: 'contrato_ID'
    })
}

relation();

module.exports = Contrato;

