'use strict';

var User = require('../models/user');

module.exports.index  = function(req, res){
    var messages = req.flash('error')
   res.render('user/signup',{messages: messages, hasErrors: messages.length>0, csrfToken: req.csrfToken()})

   
}
module.exports.create = function(req, res){
    
   
}