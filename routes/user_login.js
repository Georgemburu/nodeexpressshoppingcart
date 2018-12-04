'use strict';
var passport = require('passport')
var csrf = require('csurf')
module.exports = function(app){
    var loginController = require('../controllers/user-login');
    
    var csrfProttection = csrf();
    app.use(csrfProttection)
    app.route('/user/login')
        .get(loginController.index)
        .post(passport.authenticate('local-signin', {
            successRedirect: '/admin/userlist',
            failureRedirect: '/user/login',
            failureFlash: true
        }),loginController.login)
}