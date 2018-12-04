'use strict';

var Cart = require('../models/cart');

module.exports.index  = function(req, res){
   var productId = req.params.id;

   var cart = new Cart(new Object(req.session.cart));

   cart.reduceByOne(productId);

   req.session.cart = cart
    res.redirect('/cart/index')
   

   
}