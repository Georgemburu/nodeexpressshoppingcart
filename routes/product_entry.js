'use strict';

module.exports = function(app){
    var productController = require('../controllers/product-entry');

    app.route('/')
        .get(productController.index)
}