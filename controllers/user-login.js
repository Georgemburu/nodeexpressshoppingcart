'use strict';

//var User = require('../models/user');

module.exports.index  = function(req, res){
    var messages = req.flash('error')
   res.render('user/login',{ csrfToken: req.csrfToken(), messages: messages})

   
}

module.exports.login  = function(req, res){
    
 
    
 }