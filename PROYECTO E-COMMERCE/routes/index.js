var express = require("express");
var router = express.Router();
var modelProducts = require('../data/products');


/* GET home page. */
router.get("/", function (req, res, next) {
  let user = {
    Categoria: "null",
  };
  let productos = modelProducts.Consulta();
  if (req.session.user) {
    user = req.session.user;
    
  }
  let data = {
    Formulario: "Home",
    User: user,
    Productos: productos,
  };
  res.render("index", { data: data });
});

module.exports = router;


//Si no hay usuario en sesion
// data = { Formulario: "Home", User: {Categoria: "null"}}

//Si hay un usuario en sesion
/* data = { Formulario: "Home", User: {id: usuarioExistente.id, Nombre: usuarioExistente.Nombre, Apellido: usuarioExistente.Apellido, Email: usuarioExistente.Email,
      Categoria: usuarioExistente.Categoria,
      Imagen: usuarioExistente.Imagen}}
      */