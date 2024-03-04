const { Router } = require("express");

const router = new Router();

const DetalleController = require("../controllers/detalle.controller"); // crea el modelo
const detalleController = new DetalleController();

/*
router.get('/', userController.getAll);
router.get('/:cedula', userController.getOne);
*/

module.exports = router;