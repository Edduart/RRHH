const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.js")


class Asistencia extends Model {}

Asistencia.init( //revisar tipos de datos
    {
        asistencia_ID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        horas_de_trabajo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cedula: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        horas_extra: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{
        sequelize, // instacia de sequelize => base de datos
        modelName: 'Asistencia', // Nombre del modelo en sequelize
        tableName: 'Control_de_asistecia', // Nombre directo de la tabla
        timestamps: false 
    }
)

const relation = async() => {
    const {Asistencia, User} = await sequelize.models;
    Asistencia.belongsTo(User, {
        targetKey: 'cedula',
        foreignKey: 'cedula'
    });
}

relation();

module.exports = Asistencia;

