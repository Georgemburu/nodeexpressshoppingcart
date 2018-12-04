'use strict';

module.exports = function(app){
    var addCartController = require('../controllers/add-cart');

    app.route('/addcart/:id')
        .get(addCartController.index)
}