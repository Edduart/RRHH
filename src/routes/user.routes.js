const { Router } = require("express");
const UserController = require("../controllers/crud-controller");
const router = new Router();
const userController = new UserController();

router.get('/', userController.getAll);
router.get('/:cedula', userController.getOne);
router.post('/', userController.create);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);

router.get('/sesion', userController.changeView); //Esta va 1era porque sino se leera como un string a cedula

module.exports = router;