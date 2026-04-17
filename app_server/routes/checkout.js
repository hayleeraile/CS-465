var express = require('express');
var router = express.Router();
var controller = require('../controllers/checkout');

router.get('/', controller.checkout);

module.exports = router;