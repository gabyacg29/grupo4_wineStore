var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/usersControllers');

router.get('/', usersCtrl.ingresar);
module.exports = router;