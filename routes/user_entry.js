'use strict';

module.exports = function(app){
    var userEntryController = require('../controllers/user-entry');

    app.route('user/login')
        .get(userEntryController.index)
}