'use strict';

var Product = require('../models/product');
var Cart = require('../models/cart');

module.exports.index  = function(req, res){
    if(!req.session.cart){
        return res.redirect('/')
    }
    if(!req.user){
        return res.redirect('/user/login')
    }
    
   res.render('cart/checkout')

   
}