const userModel = require('../models/user');

function loginForm(req, res, next) {
    return res.render('user/login');
}

async function login(req, res, next) {
    let checkUser = await userModel.findOne({ username: req.body.username });

    if (!checkUser || checkUser.password != req.body.password) {
        res.locals.errMsg = "The login information is incorrect";
        return res.render('user/login');
    }

    req.session.userId = checkUser._id;
    return res.redirect('/user/profile');
    
}

function registerForm(req, res, next) {
    return res.render('user/register');
}

async function register(req, res, next) {
    let checkUser = await userModel.findOne({ username: req.body.username });

    if (checkUser) {
        res.locals.errMsg = "Information Is Duplicate"
        return res.render('user/register');

    }

    let user = new userModel({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: (+req.body.gender === 1) ? true : false,
    })

    user.save(function (err, results) {
        if (err) {
            console.log(err)
            return res.send('error')

        } else {
            res.locals.resultMsg = "Registration completed successfully"
            return res.render('user/login');
        }
    });
}

function profileForm(req, res, next) {
    return res.render('user/profile');
}

async function profile(req, res, next) {
    let checkUser = await userModel.findOne({ username: req.body.username });

    if (checkUser) {
        res.locals.errMsg = "Information Is Duplicate"
        return res.render('user/profile');

    }

    let user = new userModel({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: (+req.body.gender === 1) ? true : false,
    })

    user.save(function (err, results) {
        if (err) {
            console.log(err)
            return res.send('error')

        } else {
            res.locals.resultMsg = "Registration completed successfully"
            return res.render('user/login');
        }
    });
}



module.exports = {
    loginForm,
    login,
    registerForm,
    register,
    profileForm,
    profile

}