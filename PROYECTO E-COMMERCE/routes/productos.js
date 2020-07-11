var express = require('express');
var router = express.Router();
var productosController = require('../controllers/productos');
var middles = require('../middleware/middles');


router.get('/', productosController.list); // funciona ok
/*
router.get('/:id', productosController.Detalle); // Solo vista

router.get('/create', productosController.FormAlta); // funciona ok
router.post('/', middles.CargaProducto, productosController.Creando); // funciona ok

router.get('/:id/edit', productosController.FormEdicion); // solo vista
router.put('/:id', productosController.Editando); // 
router.delete('/:id', productosController.Eliminando);
*/
module.exports = router;
