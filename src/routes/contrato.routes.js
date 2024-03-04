const { Router } = require("express");

const router = new Router();

const ContratoController = require("../controllers/contrato.controller"); // crea el modelo
const contratoController = new ContratoController();

/*
router.get('/', userController.getAll);
router.get('/:cedula', userController.getOne);
*/

module.exports = router;