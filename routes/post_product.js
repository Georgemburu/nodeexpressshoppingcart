'use strict';

module.exports = function(app){
    var postProductController = require('../controllers/post-product');

    app.route('/admin/postproduct')
        .get(postProductController.index)
}