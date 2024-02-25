// CONTROLADORES
const { request, response } = require("express");
//let { users } = require("../config/dbfake");
const User = require("../models/user.model");

class UserController {

  constructor() { }

  getAll = async (req = request, res = response) => {
    try {
      const users = await User.findAll();
      return res.status(200).json({
        users
      });
    } catch (error) {
      return res.status(400).send(error)
    }
  };

  getOne = async (req = request, res = response) => {
    const { cedula } = req.params;
    try {
      const users = await User.findByPk(cedula);
      if(users){
        return res.status(200).json({
          msj: "usuario encontrado",
          users
        });
      } else {
        return res.status(404).json({
          msj: "usuario no con la cedula "+cedula+" no existe",
        });
      }
    } catch(error) {
      return res.status(400).send(error)
    }
  };

  create = async (req, res = response) => {
    try {
      const { cedula, nombre, apellido, correo, telefono } = req.body;
      let create = await User.create( { cedula, nombre, apellido, correo, telefono } );
      return res.status(200).json({
        msj: "Usuario creado exitosamente",
        create
      });
    } catch (error){
      return res.status(400).send(error)
    }
  };
  update = async (req, res = response) => {
    const { id } = req.params;
    try {
      const users = await User.findByPk(id);
      if (users) {
        const { cedula, nombre, apellido, correo, telefono } = req.body;

        await User.update({ cedula: cedula, nombre: nombre, apellido: apellido, correo: correo, telefono: telefono}, { where: {cedula: id} });
        return res.status(200).json({
          msj: "Usuario actualizado exitosamente",
          users
        });
      } else {
        return res.status(404).json({
          msj: "usuario no con la cedula "+id+" no existe",
        });
      }
    }catch (error){
      return res.status(400).send(error)
    }
  };

  delete = async (req, res = response) => {
    const { id } = req.params;
    try {
      const users = await User.findByPk(id);
      if(users){
        await User.destroy( { where: {cedula: id}} ) // se debe modificar para realizar un eliminacion logica
        return res.status(200).json({
          msj: "usuario no con la cedula "+id+" eliminado correctamente",
        });
      } else {
        return res.status(404).json({
          msj: "usuario no con la cedula "+id+" no existe",
        });
      }
    } catch (error) {
      return res.status(400).send(error)
    }
  };

  changeView = (req = request, res = response) => {
    console.log("change view ejecutada")
    return res.status(200).json({
      msg: "OK response"
    })
  };

}

module.exports = UserController;