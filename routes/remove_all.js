'use strict';

module.exports = function(app){
    var removeAllController = require('../controllers/remove-all');

    app.route('/cart/removeall/:id')
        .get(removeAllController.index)
}