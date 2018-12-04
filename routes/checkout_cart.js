'use strict';

module.exports = function(app){
    var checkoutCartController = require('../controllers/checkout-cart');

    app.route('/cart/checkout')
        .get(checkoutCartController.index)
}