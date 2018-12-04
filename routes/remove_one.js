'use strict';

module.exports = function(app){
    var removeOneController = require('../controllers/remove-one');

    app.route('/cart/removeone/:id')
        .get(removeOneController.index)
}