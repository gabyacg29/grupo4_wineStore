var express = require('express');
var router = express.Router();
var registroCtrl = require('../controllers/registroControllers');

router.get('/', registroCtrl.registrar);

module.exports = router;