const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.js")


class Detalle extends Model {}

Detalle.init( //revisar tipos de datos
    {
        detalle_ID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        nomina_ID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        concepto_ID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        }
    },{
        sequelize, // instacia de sequelize => base de datos
        modelName: 'Detalle', // Nombre del modelo en sequelize
        tableName: 'Detalle', // Nombre directo de la tabla
        timestamps: false 
    }
)

const relation = async() => {
    const {Detalle, Nomina, Concepto} = await sequelize.models;
    Detalle.hasMany(Nomina, {
        targetKey: 'nomina_ID',
        foreignKey: 'nomina_ID'
    });
    Detalle.hasMany(Concepto, {
        targetKey: 'concepto_ID',
        //foreignKey: 'concepto_ID'
    });
}

relation();

module.exports = Detalle;

