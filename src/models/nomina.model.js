const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.js")


class Nomina extends Model {}

Nomina.init( //revisar tipos de datos
    {
        nomina_ID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        contrato_ID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        tipo: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        monto_total: {
            type: DataTypes.CHAR,
            allowNull: false
        }
    },{
        sequelize, // instacia de sequelize => base de datos
        modelName: 'Nomina', // Nombre del modelo en sequelize
        tableName: 'nomina', // Nombre directo de la tabla
        timestamps: false 
    }
)

const relation = async() => {
    const { Contrato, Nomina, Detalle } = await sequelize.models;
    Nomina.belongsTo(Contrato, {
        targetKey: 'contrato_ID',
        foreignKey: 'contrato_ID'
    });

    Nomina.hasMany(Detalle, {
        targetKey: 'nomina_ID',
        foreignKey: 'nomina_ID'
    })
}

relation();

module.exports = Nomina;

