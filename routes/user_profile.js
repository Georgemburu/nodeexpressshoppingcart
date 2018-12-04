'use strict';

module.exports = function(app){
    var profileController = require('../controllers/user-profile');

    app.route('/user/profile')
        .get(profileController.index)
}