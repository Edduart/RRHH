// CONTROLADORES
const { request, response } = require("express");
let { users } = require("../config/db");
const User = require("../models/user.model");

class UserController {

  constructor() { }

  getAll = (req = request, res = response) => {
    console.log('This is the base URL:Request => ' + req.baseUrl);
    return res.status(200).json({
      user: users
    });
  };

  getOne = (req = request, res = response) => {
    const { cedula } = req.params;

    let user = users.find((user) => {
      if (user.cedula == cedula) {
        return true
      }
    })
    if (!user) {
      return res.status(404).json({
        msj: "No existe un usuario con ese numero de cedula",
        cedula
      });
    }
    return res.status(200).json({
      msj: "Todo bien en el get one",
      user
    });
  };

  create = (req, res = response) => {
    console.log(req.body);
    const { nin, firstname, lastname, email, cell_phone, address } = req.body;
    let user = new User(nin, firstname, lastname, email, cell_phone, address);
    users.push(user)
    return res.status(200).json({
      msj: "Usuario creado exitosamente",
      user
    });
  };
  update = (req, res = response) => {
    const { id } = req.params;
    const { nin, firstname, lastname, email, cell_phone, address } = req.body;
    let user = new User(nin, firstname, lastname, email, cell_phone, address)
    let indice = users.findIndex((user) => {
      if (user.nin == id) {
        return true
      }
    })

    users[indice] = user;
    return res.status(200).json({
      msj: "Datos actualizados",
      user: users[indice]
    });
  };

  delete = (req, res = response) => {
    const { id } = req.params;
    let indice = users.findIndex((user) => {
      if (user.nin == id) {
        return true
      }
    })

    let user = users.splice(indice, 1)

    return res.status(200).json({
      msj: "Usuario eliminado",
      user
    })
  };


  changeView = (req = request, res = response) => {
    console.log("change view ejecutada")
    return res.status(200).json({
      msg: "OK response"
    })
  };

}

module.exports = UserController;