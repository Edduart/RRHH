const { Router } = require("express");

const router = new Router();

const NontratoController = require("../controllers/nomina.controller"); // crea el modelo
const nontratoController = new NontratoController();

/*
router.get('/', userController.getAll);
router.get('/:cedula', userController.getOne);
*/

module.exports = router;