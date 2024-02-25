const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/dbc.js")

//const Sequelize = new sequelize();
//const { v4: uuidv4 } = require('uuid');

class User extends Model {
    /*nin = ""; // NIN identificacion nacional
    firstname = "";
    lastname = "";
    email = "";
    cell_phone = "";
    address = "";
    //date_of_admission = new Date();

    constructor(nin, firstname, lastname, email, cell_phone, address, date_of_admission) {
        this.nin = nin;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email
        this.cell_phone = cell_phone;
        this.address = address;
        //this.date_of_admission=date_of_admission.tolocaleDateString();
    }*/
}

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
            type: DataTypes.TIME, // <= revisar tipo de dato
            allowNull: false
        }
    },{
        sequelize, // instacia de sequelize => base de datos
        modelName: 'personal', // Nombre del modelo en sequelize
        tableName: 'personal', // Nombre directo de la tabla
        timestamps: false
    })

module.exports = User;

