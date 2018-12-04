'use strict';

var Cart = require('../models/cart');

module.exports.index  = function(req, res){
   var cart = new Cart(new Object(req.session.cart))

   

   res.render('cart/index',{products: cart.generateArray(), totalPrice: cart.totalPrice});

   
}