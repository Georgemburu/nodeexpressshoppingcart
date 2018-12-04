'use strict';

var Product = require('../models/product');
var Cart = require('../models/cart');

module.exports.index  = function(req, res){
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {})
   Product.findById(productId, function(err, result){
        if(err) {
            return res.redirect('/');
        }
        cart.addItem(result);
        req.session.cart = cart;
        //console.log(cart)
        //console.log(`session ${req.session.cart.totalQty}`)
        res.redirect('/')
   })

   
}