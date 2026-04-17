var express = require('express');
var router = express.Router();
var controller = require('../controllers/reservations');

const requireLogin = (req, res, next) => {
    if(req.session && req.session.loggedIn) {
        return next();
    }
    res.redirect('/login');
};

router.get('/', requireLogin, controller.reservations);

module.exports = router;