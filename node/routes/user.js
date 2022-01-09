const express = require('express');
const router = express.Router();

const sessionCheck = require('../controller/sessionCheck');

const userController = require('../controller/user')


router.get('/', userController.loginForm)
router.post('/login', userController.login)

router.get('/register', userController.registerForm)
router.post('/register', userController.register)

router.get('/profile', [sessionCheck.login], userController.profileForm)
router.post('/profile', [sessionCheck.login],userController.profile,
    function (req, res) {
        res.render('user/profile');
    })


module.exports = router;