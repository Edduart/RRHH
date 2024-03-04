const { Router } = require("express");

const router = new Router();

const ConceptoController = require("../controllers/concepto.controller"); // crea el modelo
const conceptoController = new ConceptoController();

/*
router.get('/', userController.getAll);
router.get('/:cedula', userController.getOne);
*/

module.exports = router;