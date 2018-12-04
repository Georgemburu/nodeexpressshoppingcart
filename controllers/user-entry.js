'use strict';

var User = require('../models/user');

module.exports.index  = function(req, res){
    User.find(function(err,docs){
       
            res.render('user/index', {users: docs})
        
    })

   
}