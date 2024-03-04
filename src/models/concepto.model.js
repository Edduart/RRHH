const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.js")


class Concepto extends Model {}

Concepto.init( //revisar tipos de datos
    {
        concepto_ID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        sueldo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        prima_por_hijo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ivs: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fidecomiso: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },{
        sequelize, // instacia de sequelize => base de datos
        modelName: 'Concepto', // Nombre del modelo en sequelize
        tableName: 'Concepto', // Nombre directo de la tabla
        timestamps: false 
    }
)

const relation = async() => {
    const {Concepto, Detalle} = await sequelize.models;
    Concepto.belongsTo(Detalle, {
        //targetKey: 'concepto_ID',
        //foreignKey: 'concepto_ID'
    });
}

relation();

module.exports = Concepto;

