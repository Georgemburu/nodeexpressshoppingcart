'use strict';
var passport = require('passport')
var csrf = require('csurf');


module.exports = function(app){
    var signUpController = require('../controllers/user-signup');
    var csrfProttection = csrf();
   app.use(csrfProttection)
    app.route('/user/signup')
        .get(signUpController.index)
        .post(passport.authenticate('local-signup', {
            successRedirect: '/user/login',
            failureRedirect: '/user/signup',
            failureFlash: true
        }),signUpController.create)
}