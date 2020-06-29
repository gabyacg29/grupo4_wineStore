var express = require("express");
var router = express.Router();
var usersController = require("../controllers/users");
var middles = require("../middleware/middles");
const { check, validationResult, body } = require('express-validator');


router.get("/login", usersController.FormIngreso);
router.post("/login", usersController.Ingreso);
router.get("/register", usersController.FormRegistro);
router.post("/register", middles.CargarAvatar, [
    check('email').isEmail().withMessage('Debe poner un email válido'),
    check('contrasenia').isLength({ min: 8 }).withMessage('Debe poner una contraseña de 8 caracteres')
],
     usersController.Registrando);
router.get("/:id/edit", usersController.FormEdicion);
router.put("/:id", usersController.Editando);
router.get("/:id", usersController.Detalle);

module.exports = router;
