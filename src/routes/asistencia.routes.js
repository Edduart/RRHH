const { Router } = require("express");

const router = new Router();

const AsistenciaController = require("../controllers/asistencia.controller"); // crea el modelo
const asistenciaController = new AsistenciaController();

/*
router.get('/', userController.getAll);
router.get('/:cedula', userController.getOne);
*/

module.exports = router;