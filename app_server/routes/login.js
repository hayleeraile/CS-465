var express = require('express');
var router = express.Router();
var controller = require('../controllers/login');

router.get('/', controller.login);
router.post('/', controller.doLogin);
router.get('/', controller.logout);

module.exports = router;