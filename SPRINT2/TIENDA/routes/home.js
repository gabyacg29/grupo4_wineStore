var express = require('express');
var router = express.Router();
var homeCtrl = require('../controllers/homeControllers');

router.get('/', homeCtrl.inicio);
router.get('/home', homeCtrl.principal);
module.exports = router;