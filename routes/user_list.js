'use strict';

module.exports = function(app){
    var userListController = require('../controllers/user-list');

    app.route('/admin/userlist')
        .get(userListController.index)
        

    app.route('/admin/userlist/:id')
        .get(userListController.find)
}