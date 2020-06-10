var express = require('express');
var router = express.Router();
var pagosCtrl = require('../controllers/pagosControllers');

router.get('/', pagosCtrl.ingresarPago);

module.exports = router;