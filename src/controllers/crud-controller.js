// CONTROLADORES
const { request, response } = require("express");
const User = require("../models/user.model");

class UserController {

  constructor() { }

  //funcion de leer

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

  // funcion de buscar por id

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
          msj: "usuario con la cedula "+cedula+" no existe",
        });
      }
    } catch(error) {
      return res.status(400).send(error)
    }
  };

  //funcion de crear 

  create = async (req, res = response) => {
    const { cedula, nombre, apellido, correo, telefono } = req.body;
    console.log(req.body);
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

  // funcion actualizar

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
          msj: "usuario con la cedula "+id+" no existe",
        });
      }
    }catch (error){
      return res.status(400).send(error)
    }
  };

  // funcion de eliminiar -> SE DEBE CAMBIAR POR ELIMINACION LOGICA https://sequelize.org/docs/v6/core-concepts/paranoid/

  delete = async (req, res = response) => {
    const { id } = req.params;
    try {
      const users = await User.findByPk(id);
      if(users){
        await User.destroy( { where: {cedula: id}} ) // se debe modificar para realizar un eliminacion logica
        return res.status(200).json({
          msj: "usuario con la cedula "+id+" eliminado correctamente",
        });
      } else {
        return res.status(404).json({
          msj: "usuario con la cedula "+id+" no existe",
        });
      }
    } catch (error) {
      return res.status(400).send(error)
    }
  };

  // prototipo para control de vistas solo prueba, deberia ser otro controlador

  changeView = (req = request, res = response) => {
    console.log("change view ejecutada")
    return res.status(200).json({
      msg: "OK response"
    })
  };

}

module.exports = UserController;