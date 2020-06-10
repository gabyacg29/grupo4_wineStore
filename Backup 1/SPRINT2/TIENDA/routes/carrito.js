var express = require('express');
var router = express.Router();
var carritoCtrl = require('../controllers/carritoControllers');

router.get('/', carritoCtrl.verCarrito);
module.exports = router;