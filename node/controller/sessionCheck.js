const userModel = require('../models/user');

async function login(req, res, next) {
    if (!req.session.userId){
        res.locals.errMsg = "Log in first";
        return res.render('user/login');
    }

    let checkUser = await userModel.findOne({ _id: req.session.userId });

    if (!checkUser) {
        res.locals.errMsg = "Log in first";
        return res.redirect('user/login');
    }
    
    res.locals.userInfo = checkUser;

    next();
}


module.exports = {
    login
}