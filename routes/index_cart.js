'use strict';

module.exports = function(app){
    var indexCartController = require('../controllers/index-cart');

    app.route('/cart/index')
        .get(indexCartController.index)
}